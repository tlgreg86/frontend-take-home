import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { DropdownMenu, IconButton } from "@radix-ui/themes";
import { useState } from "react";
import { Role } from "../../api/roles/types";
import EditRoleDialog from "./EditRoleDialog";

type Props = {
  role: Role;
};

const ActionMenu = ({ role }: Props) => {
  const [editRoleDialogOpen, setEditRoleDialogOpen] = useState(false);

  return (
    <>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <IconButton radius="full" color="gray" variant="ghost">
            <DotsHorizontalIcon />
          </IconButton>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content align="end">
          <DropdownMenu.Item onClick={() => setEditRoleDialogOpen(true)}>
            Edit role
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
      <EditRoleDialog
        role={role}
        open={editRoleDialogOpen}
        onClose={() => setEditRoleDialogOpen(false)}
      />
    </>
  );
};

export default ActionMenu;
