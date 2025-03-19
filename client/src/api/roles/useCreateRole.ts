import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateRoleParams } from './types';

export const useCreateRole = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ name, description }: CreateRoleParams) => {
      const response = await fetch(`http://localhost:3002/roles/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, description }),
      });
      if (!response.ok) {
        throw new Error("Network error");
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["roles"] });
    },
  });
};
