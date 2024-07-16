import { api } from "@/services/api";
import { useInfiniteQuery } from "@tanstack/react-query";

interface FetchProps {
  page: number;
  postId: string;
}
const fetcher = async ({ page, postId }: FetchProps) => {
  const response = await api.feed.get(`/post/comments/${postId}/?page=${page}`);

  return response.data.comments;
};

export const useComments = (postId: string, options = {}) => {
  return useInfiniteQuery({
    queryKey: ["useComments"],

    queryFn: ({ pageParam }) =>
      fetcher({
        page: pageParam,
        postId,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages?.length + 1;

      return lastPage?.length !== 0 ? nextPage : undefined;
    },

    ...options,
  });
};
