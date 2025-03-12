import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteUser = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const response = await fetch(`http://localhost:3002/users/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Network error");
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["users"]});
    },
  });
};
