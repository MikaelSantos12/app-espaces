import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

const fetcher = async () => {
  const response = await api.feed.get(`/cuisines`);

  return response.data.cuisines;
};

export const useCuisines = (options = {}) => {
  return useQuery({
    queryKey: ["useCuisines"],
    queryFn: fetcher,
    ...options,
  });
};
