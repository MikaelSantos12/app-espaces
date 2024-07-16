import { Input } from "@/components/Input";
import { api } from "@/services/api";

import { PaperPlaneRight } from "phosphor-react-native";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  TouchableOpacity,
  View,
} from "react-native";

import { useAuth } from "@/context/AuthContext";
import { LikeProvider } from "@/context/LikeContext";
import { CommentDTO } from "@/dtos/CommentDTO";
import { useComments } from "@/hooks/useComments";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAnimatedKeyboard, useAnimatedStyle } from "react-native-reanimated";
import { useTheme } from "styled-components/native";
import { z } from "zod";
import { CommentCard } from "./CommentCard";
import { UserPhoto } from "./CommentCard/styles";
import { Bottom, Container, Content } from "./styles";

type Comments = {
  photo: string;
  name: string;
  comment: string;
  likeCount: string;
  commentsCount: string;
};

interface Props {
  postId: string;
}

const { width, height } = Dimensions.get("window");
const commentSchema = z.object({
  comment: z.string(),
});

type CommentSchema = z.infer<typeof commentSchema>;

export function Comments({ postId }: Props) {
  const { user } = useAuth();
  const {
    data: comments,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useComments(postId);

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };
  const renderFooter = () => {
    if (!isFetchingNextPage) return null;
    return (
      <View style={{ padding: 10 }}>
        <ActivityIndicator size="large" />
      </View>
    );
  };
  const { control, watch, handleSubmit } = useForm<CommentSchema>({
    resolver: zodResolver(commentSchema),
  });
  const theme = useTheme();

  const keyboard = useAnimatedKeyboard();
  const translateStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: -keyboard.height.value }],
    };
  });
  const queryClient = useQueryClient();

  const mutate = useMutation({
    mutationFn: (data: CommentSchema) => {
      return api.feed.post(`post/comment/${postId}`, {
        content: data.comment,
      });
    },
    onSuccess: (res) => {
      const comment = res.data.comment;
      queryClient.setQueryData(["useComments"], (data: any) => ({
        ...data,
        pages: data.pages.map((page: CommentDTO[], index: number) =>
          index === 0 ? [comment, ...page] : page
        ),
      }));
    },
  });
  const handlePress = (data: CommentSchema) => {
    mutate.mutate(data);
  };

  const renderItem = useCallback(({ item }: { item: CommentDTO }) => {
    return (
      <LikeProvider>
        <CommentCard item={item} />
      </LikeProvider>
    );
  }, []);
  console.log(user);
  return (
    <Container style={{ flex: 1 }}>
      <Content>
        <View style={{ marginTop: 32 }}>
          <FlatList
            scrollEnabled={false}
            data={comments?.pages.flatMap((page) => page) || []}
            renderItem={renderItem}
            onEndReached={loadMore}
            showsVerticalScrollIndicator={false}
            onEndReachedThreshold={0.1}
            ListFooterComponent={renderFooter}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{
              gap: 24,

              paddingBottom: 100,
            }}
          />
        </View>
      </Content>
      <Bottom style={[translateStyle]}>
        <Input
          Icon={<UserPhoto source={{ uri: user.photo }} />}
          style={{ borderRadius: 999, width: "100%" }}
          name="comment"
          placeholder="Escreva seu comentário"
          control={control}
          rightIcon={
            <TouchableOpacity onPress={handleSubmit(handlePress)}>
              <PaperPlaneRight
                color={theme.colors.main}
                weight={watch("comment") ? "fill" : "thin"}
              />
            </TouchableOpacity>
          }
        />
      </Bottom>
    </Container>
  );
}
