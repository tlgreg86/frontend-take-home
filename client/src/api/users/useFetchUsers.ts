import { useQuery } from "@tanstack/react-query";
import { FetchUsersParams } from './types';
import { buildQueryString } from '../utils';

export const useFetchUsers = (searchParams: FetchUsersParams = { page: 1 }) =>
  useQuery({
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
