import { api } from "@/services/api";
import { useInfiniteQuery } from "@tanstack/react-query";

const fetcher = async (page: number) => {
  const response = await api.feed.get(`/posts/?page=${page}&limit=3`);

  return response.data.posts;
};

export const useFeed = (options = {}) => {
  return useInfiniteQuery({
    queryKey: ["useFeed"],

    queryFn: ({ pageParam }) => fetcher(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages?.length + 1;

      return lastPage?.length !== 0 ? nextPage : undefined;
    },

    ...options,
  });
};
