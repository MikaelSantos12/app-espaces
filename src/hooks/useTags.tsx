import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

const fetcher = async () => {
  const response = await api.feed.get(`/tags`);

  const tags = response.data.tags;

  const groupedTags = tags.reduce((acc: any, item: any) => {
    if (!acc[item.group_id]) {
      acc[item.group_id] = {
        group_name: item.group_name,
        tags: [],
      };
    }
    acc[item.group_id].tags.push({
      id: item.id,
      name: item.description,
    });
    return acc;
  }, {});

  return Object.values(groupedTags);
};

export const useTags = (options = {}) => {
  return useQuery({
    queryKey: ["useTags"],
    queryFn: fetcher,
    ...options,
  });
};
