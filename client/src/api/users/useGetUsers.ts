import { useQuery } from "@tanstack/react-query";

export const useGetUsers = () =>
  useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3002/users");
      if (!response.ok) {
        throw new Error("Network error");
      }
      return response.json();
    },
  });
