import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "use-debounce";

interface Props {
  q: string;
  page?: number;
}

const fetcher = async ({ q, page = 1 }: Props) => {
  const response = await api.feed.get(`/companies/search?q=${q}&page=${page}`);
  return response.data.companies;
};

export const useSearchCompanies = ({ q, page }: Props, options = {}) => {
  const [debouncedQ] = useDebounce(q, 500);

  return useQuery({
    queryKey: ["useSearchCompanies", debouncedQ, page],
    queryFn: () => fetcher({ q: debouncedQ, page }),
    enabled: debouncedQ?.length > 0,
    ...options,
  });
};
