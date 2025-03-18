import { useQuery } from "@tanstack/react-query";

interface FetchUsersParams {
  search?: string;
  page: number;
}

export const useFetchUsers = (searchParams: FetchUsersParams) =>
  useQuery({
    queryKey: ["users", searchParams],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:3002/users?search=${searchParams.search}&page=${searchParams.page}`
      );
      if (!response.ok) {
        throw new Error("Network error");
      }
      return response.json();
    },
  });
