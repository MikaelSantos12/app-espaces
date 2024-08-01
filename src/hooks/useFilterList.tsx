import { api } from "@/services/api";
import { useInfiniteQuery } from "@tanstack/react-query";

interface Props {
  page?: number;
  tags: string[];
  cuisines: string[];
}

const fetcher = async ({ page, tags, cuisines }: Props) => {
  const tagsQuery = tags.join(",");
  const cuisinesQuery = cuisines.join(",");
  console.log(cuisinesQuery);
  const response = await api.list.get(
    `/lists/filter?page=${page}&tags=${tagsQuery}&cuisines=${cuisinesQuery}`
  );

  return response.data.lists;
};

export const useFilterList = ({ tags, cuisines }: Props, options = {}) => {
  return useInfiniteQuery({
    queryKey: ["useFilterList", tags, cuisines],

    queryFn: ({ pageParam }) =>
      fetcher({ page: pageParam, tags: tags, cuisines }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages?.length + 1;

      return lastPage?.length !== 0 ? nextPage : undefined;
    },
    enabled: tags?.length > 0,
    select: ({ pages }) => pages.flatMap((page) => page),
    ...options,
  });
};
