import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { FetchUsersParams } from "../users/types";
import { buildQueryString } from "../utils";
import { Role } from './types';

interface FetchRolesResponse {
  data: Role[];
}

export const useFetchRoles = (
  searchParams: FetchUsersParams = { page: 1 }
): UseQueryResult<FetchRolesResponse> =>
  useQuery({
    queryKey: ["roles", searchParams],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:3002/roles?${buildQueryString(searchParams)}`
      );
      if (!response.ok) {
        throw new Error("Network error");
      }
      return response.json();
    },
  });
