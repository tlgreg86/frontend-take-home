import { useQuery } from "@tanstack/react-query";

type FetchUsersParams = {
  search?: string;
  page: number;
};

export const useFetchRoles = (searchParams: FetchUsersParams = { page: 1 }) =>
  useQuery({
    queryKey: ["roles", searchParams],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:3002/roles?search=${searchParams.search}&page=${searchParams.page}`
      );
      if (!response.ok) {
        throw new Error("Network error");
      }
      return response.json();
    },
  });
