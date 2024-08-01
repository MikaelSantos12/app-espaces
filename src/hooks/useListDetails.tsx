import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

interface FetchProps {
  listId: string;
}
const fetcher = async ({ listId }: FetchProps) => {
  const response = await api.list.get(`/list/${listId}`);

  return response.data.list;
};

export const useListDetails = ({ listId }: FetchProps, options = {}) => {
  return useQuery({
    queryKey: ["useListDetails", listId],

    queryFn: () => fetcher({ listId }),

    ...options,
  });
};
