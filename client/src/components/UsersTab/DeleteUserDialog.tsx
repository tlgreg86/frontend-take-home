import { Button, AlertDialog, Flex, Text, Strong } from "@radix-ui/themes";
import { useDeleteUser } from "../../api/users/useDeleteUser";
import { User } from '../../api/users/types';

type DeleteUserDialogProps = {
  user: User;
  open: boolean;
  onClose: () => void;
};

const DeleteUserDialog = ({ user, open, onClose }: DeleteUserDialogProps) => {
  const { mutate } = useDeleteUser(user.id);

  const handleDelete = () => {
    mutate();
  };

  return (
    <AlertDialog.Root open={open} onOpenChange={onClose}>
      <AlertDialog.Content>
        <AlertDialog.Title>Delete user</AlertDialog.Title>
        <AlertDialog.Description>
          <Text>
            Are you sure? The user
            <Strong>
              {" "}
              {user.first} {user.last}{" "}
            </Strong>
            will be permanently deleted.
          </Text>
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button color="gray" variant="surface" highContrast>
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button
              onClick={handleDelete}
              variant="outline"
              color="red"
            >
              Delete user
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default DeleteUserDialog;
