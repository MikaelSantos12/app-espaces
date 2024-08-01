import { api } from "@/services/api";
import { useInfiniteQuery } from "@tanstack/react-query";

interface Props {
  page: number;
}

const fetcher = async ({ page }: Props) => {
  const response = await api.list.get(`/lists?page=${page}`);

  return response.data.lists;
};

export const useLists = (options = {}) => {
  return useInfiniteQuery({
    queryKey: ["useLists"],

    queryFn: ({ pageParam }) => fetcher({ page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages?.length + 1;

      return lastPage?.length !== 0 ? nextPage : undefined;
    },

    select: ({ pages }) => pages.flatMap((page) => page),
    ...options,
  });
};
