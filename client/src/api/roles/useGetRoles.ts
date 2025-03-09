import { useQuery } from "@tanstack/react-query";

export const useGetRoles = () =>
  useQuery({
    queryKey: ["roles"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3002/roles");
      if (!response.ok) {
        throw new Error("Network error");
      }
      return response.json()
    },
  });
