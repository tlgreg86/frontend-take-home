import { useMutation, useQueryClient } from "@tanstack/react-query";

interface EditRoleParams {
  id: string;
  newRoleData?: {
    name?: string;
    description?: string;
  };
};

export const useEditRole = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({id, ...newRoleData}: EditRoleParams) => {
      console.log('newRoleData', newRoleData)
      const response = await fetch(`http://localhost:3002/roles/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRoleData),
      });
      if (!response.ok) {
        throw new Error("Network error");
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["roles"]});
    },
  });
};
