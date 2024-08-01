import { api } from "@/services/api";
import { useInfiniteQuery } from "@tanstack/react-query";

interface Props {
  page?: number;
  latitude?: number;
  longitude?: number;
}

const fetcher = async ({ latitude, longitude, page }: Props) => {
  const response = await api.feed.get(
    `/companies?page=${page}&latitude=${latitude}&longitude=${longitude}`
  );
  console.log(response);
  return response.data.companies;
};

export const useCompanies = ({ latitude, longitude }: Props, options = {}) => {
  return useInfiniteQuery({
    queryKey: ["useCompanies", latitude, longitude],

    queryFn: ({ pageParam }) =>
      fetcher({ page: pageParam, latitude, longitude }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages?.length + 1;

      return lastPage?.length !== 0 ? nextPage : undefined;
    },
    enabled: !!latitude,
    select: ({ pages }) => pages.flatMap((page) => page),
    ...options,
  });
};
