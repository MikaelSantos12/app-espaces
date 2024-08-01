import { api } from "@/services/api";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useDebounce } from "use-debounce";

interface Props {
  page?: number;
  q: string;
}

const fetcher = async ({ page, q }: Props) => {
  const response = await api.list.get(`/lists/search?page=${page}&q=${q}`);

  return response.data.lists;
};

export const useSearchLists = ({ q }: Props, options = {}) => {
  const [debouncedQ] = useDebounce(q, 500);
  return useInfiniteQuery({
    queryKey: ["useSearchLists", debouncedQ],

    queryFn: ({ pageParam }) => fetcher({ page: pageParam, q: debouncedQ }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages?.length + 1;

      return lastPage?.length !== 0 ? nextPage : undefined;
    },
    enabled: debouncedQ?.length > 0,
    select: ({ pages }) => pages.flatMap((page) => page),
    ...options,
  });
};
