import { PostsDTO } from "@/dtos/PostDTO";
import { api } from "@/services/api";
import { UseQueryResult, useQuery } from "@tanstack/react-query";

const fetcher = async () => {
  const response = await api.feed.get("/posts");
  return response.data;
};

export const useFeed = (options = {}): UseQueryResult<PostsDTO, unknown> => {
  return useQuery({
    queryKey: ["useFeed"],

    queryFn: fetcher,
    ...options,
  });
};
