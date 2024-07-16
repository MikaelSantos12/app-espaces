import { Actions } from "@/components/Actions";
import { Comments } from "@/components/shared/Comments";
import { useBottomSheet } from "@/context/BottomSheetContext";
import { useLikeContext } from "@/context/LikeContext";
import { Post } from "@/dtos/PostDTO";
import { api } from "@/services/api";
import { Ionicons } from "@expo/vector-icons";
import { useMutation } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { useTheme } from "styled-components/native";
import * as S from "./styles";

interface Props {
  data: Post;
}

const AnimatedIcon = Animated.createAnimatedComponent(Ionicons);

export function PublicationActions({ data }: Props) {
  const { isLiked, toggleLike, likePost, setIsLiked } = useLikeContext();
  const { openBottomSheet } = useBottomSheet();

  const scale = useSharedValue(1);
  const theme = useTheme();
  const checked = useSharedValue(0);

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const { setComponent } = useBottomSheet();

  const mutation = useMutation({
    mutationFn: async () => {
      toggleLike();

      if (isLiked) {
        return api.feed.delete(`post/unlike/${data.id}`);
      }
      checked.value = withTiming(1);
    },
  });

  useEffect(() => {
    if (isLiked) {
      scale.value = withSpring(1.5, { damping: 3 }, (isFinished) => {
        if (isFinished) {
          scale.value = withSpring(1);
        }
      });
    }
  }, [isLiked]);

  useEffect(() => {
    if (data.isLiked) {
      likePost();
    }
  }, [data.isLiked]);
  useEffect(() => {
    checked.value = withTiming(isLiked ? 1 : 0);
  }, [isLiked]);

  const handleOpenComments = () => {
    setComponent(<Comments postId={data.id} />);
    openBottomSheet();
  };

  return (
    <>
      <S.ActionsContainer>
        <Actions
          count={isLiked ? data._count.Like + 1 : data._count.Like}
          icon={
            <TouchableOpacity onPress={() => mutation.mutate()}>
              <AnimatedIcon
                name={isLiked ? "heart" : "heart-outline"}
                size={30}
                color={isLiked ? theme.colors.danger : theme.colors.buttons}
                style={[animatedContainerStyle]}
              />
            </TouchableOpacity>
          }
        />
        <TouchableOpacity onPress={handleOpenComments}>
          <Actions
            count={data?._count?.Comment}
            icon={
              <AnimatedIcon
                name={"chatbubble-outline"}
                size={30}
                color={theme.colors.buttons}
              />
            }
          />
        </TouchableOpacity>

        <Actions
          count={200}
          icon={
            <AnimatedIcon
              name={"paper-plane-outline"}
              size={30}
              color={theme.colors.buttons}
            />
          }
        />
      </S.ActionsContainer>
    </>
  );
}
