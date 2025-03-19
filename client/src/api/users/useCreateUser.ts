import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateUserParams } from './types';

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ firstName, lastName, roleId }: CreateUserParams) => {
      const response = await fetch(`http://localhost:3002/users/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ first: firstName, last: lastName, roleId }),
      });
      if (!response.ok) {
        throw new Error("Network error");
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};
