import { useQuery } from "@tanstack/react-query";

type FetchUsersParams = {
  search?: string;
  page: number;
};

const buildQueryString = (searchParams: FetchUsersParams) =>
  new URLSearchParams({
    search: searchParams.search?.toString() ?? "",
    page: searchParams.page.toString(),
  }).toString();

export const useFetchUsers = (searchParams: FetchUsersParams = { page: 1 }) => {
  return useQuery({
    queryKey: ["users", searchParams],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:3002/users?${buildQueryString(searchParams)}`
      );
      if (!response.ok) {
        throw new Error("Network error");
      }
      return response.json();
    },
  });
};
