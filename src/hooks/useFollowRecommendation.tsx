import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

const fetcher = async () => {
  try {
    const response = await api.feed.get(`/follow/recommendation`);
    console.log("response", response);
    return response.data.list;
  } catch (error) {
    console.error("Error fetching follow recommendations:", error);
  }
};

export const useFollowRecommendation = (options = {}) => {
  return useQuery({
    queryKey: ["useFollowRecommendation"],

    queryFn: fetcher,

    ...options,
  });
};
