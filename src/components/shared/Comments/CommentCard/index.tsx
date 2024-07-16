import { Actions } from "@/components/Actions";
import { useAuth } from "@/context/AuthContext";
import { useLikeContext } from "@/context/LikeContext";
import { CommentDTO } from "@/dtos/CommentDTO";
import { api } from "@/services/api";
import { formatPublicationDate } from "@/utils/format-post-date";
import { Ionicons } from "@expo/vector-icons";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ChatCircle, Trash } from "phosphor-react-native";
import { useCallback, useEffect } from "react";
import { Swipeable, TouchableOpacity } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { useTheme } from "styled-components/native";
import {
  ActionsContainer,
  Comment,
  Container,
  Date,
  Header,
  SwipeableRemove,
  User,
  UserName,
  UserPhoto,
} from "./styles";

interface Props {
  item: CommentDTO;
}

const AnimatedIcon = Animated.createAnimatedComponent(Ionicons);
export function CommentCard({ item }: Props) {
  const { isLiked, toggleLike, likePost, setIsLiked } = useLikeContext();
  const theme = useTheme();
  const scale = useSharedValue(1);
  const { user } = useAuth();
  const checked = useSharedValue(0);

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });
  useEffect(() => {
    checked.value = withTiming(isLiked ? 1 : 0);
  }, [isLiked]);

  useEffect(() => {
    if (isLiked) {
      scale.value = withSpring(1.5, { damping: 3 }, (isFinished) => {
        if (isFinished) {
          scale.value = withSpring(1);
        }
      });
    }
  }, [isLiked]);

  const mutation = useMutation({
    mutationFn: async () => {
      toggleLike();

      if (isLiked) {
        return api.feed.post(`comment/unlike/${item.id}`);
      }

      checked.value = withTiming(1);
      return api.feed.post(`comment/like/${item.id}`);
    },
  });
  useEffect(() => {
    if (item.isLiked) {
      likePost();
    }
  }, [item.isLiked]);

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (commentId: string) => {
      return api.feed.delete(`/comment/${commentId}`);
    },
    onSuccess: (data, variables) => {
      const deletedCommentId = variables;

      queryClient.setQueryData(["useComments"], (data: any) => ({
        ...data,
        pages: data.pages.map((page: CommentDTO[]) =>
          page.filter((comment) => comment.id !== deletedCommentId)
        ),
      }));
    },
  });
  const renderRightActions = useCallback(
    (item: CommentDTO) =>
      (item.fromMe || item.isAuthorOfPost) && (
        <SwipeableRemove>
          <TouchableOpacity onPress={() => mutate(item.id)}>
            <Trash color={theme.colors.background} />
          </TouchableOpacity>
        </SwipeableRemove>
      ),
    []
  );
  console.log(item);
  return (
    <Swipeable renderRightActions={() => renderRightActions(item)}>
      <Container>
        <Header>
          <User>
            <UserPhoto
              source={{
                uri:
                  item.author?.userPhoto?.image ||
                  "https://avatars.githubusercontent.com/u/90217183?v=4",
              }}
            />
            <UserName>@{item.author.name}</UserName>
          </User>

          <Date>{formatPublicationDate(item.createdAt)}</Date>
        </Header>
        <Comment>{item.content}</Comment>

        <ActionsContainer>
          <Actions
            count={item?._count?.likes}
            icon={
              <TouchableOpacity onPress={() => mutation.mutate()}>
                <AnimatedIcon
                  name={isLiked ? "heart" : "heart-outline"}
                  size={24}
                  color={isLiked ? theme.colors.danger : theme.colors.buttons}
                  style={[animatedContainerStyle]}
                />
              </TouchableOpacity>
            }
          />
          <Actions
            icon={
              <ChatCircle
                color={theme.colors.buttons}
                size={24}
                weight="thin"
              />
            }
          />
        </ActionsContainer>
      </Container>
    </Swipeable>
  );
}
