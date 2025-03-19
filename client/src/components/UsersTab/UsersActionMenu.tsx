import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { DropdownMenu, IconButton } from "@radix-ui/themes";
import { useState } from "react";
import DeleteUserDialog from './DeleteUserDialog';
import { User } from '../../api/users/types';

type ActionMenuProps = {
  user: User;
};

const UsersActionMenu = ({ user }: ActionMenuProps) => {
  const [deleteUserDialogOpen, setDeleteUserDialogOpen] = useState(false);

  return (
    <>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <IconButton radius="full" color="gray" variant="ghost">
            <DotsHorizontalIcon />
          </IconButton>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content align="end">
          <DropdownMenu.Item onClick={() => setDeleteUserDialogOpen(true)}>
            Delete user
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
      <DeleteUserDialog
        user={user}
        open={deleteUserDialogOpen}
        onClose={() => setDeleteUserDialogOpen(false)}
      />
    </>
  );
};

export default UsersActionMenu;
