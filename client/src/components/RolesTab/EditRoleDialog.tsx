import {
  Button,
  Flex,
  Text,
  Strong,
  Dialog,
  TextField,
  Section,
} from "@radix-ui/themes";
import { Role } from "../../api/roles/types";
import { useEditRole } from "../../api/roles/useEditRole";
import { useState } from "react";

type Props = {
  role: Role;
  open: boolean;
  onClose: () => void;
};

const EditRoleDialog = ({ role, open, onClose }: Props) => {
  const [name, setName] = useState(role.name);
  const [description, setDescription] = useState(role.description);

  const { mutateAsync } = useEditRole();

  const handleUpdateRole = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await mutateAsync(
        {
          id: role.id,
          ...{ name, description },
        },
        {
          onSuccess: () => {
            onClose();
          },
        }
      );
    } catch (error) {
      console.error("Failed to update role:", error);
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Content>
        <Dialog.Title>Edit role</Dialog.Title>
        <Dialog.Description>
          <Text>
            You are updating the
            <Strong> {role.name}</Strong> role.
          </Text>
        </Dialog.Description>
        <Section size={"1"}>
          <form onSubmit={handleUpdateRole}>
            <Flex direction="column" gap="3">
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Name
                </Text>
                <TextField.Root
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>

              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Description
                </Text>
                <TextField.Root
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </label>
            </Flex>

            <Flex gap="3" mt="4" justify="end">
              <Dialog.Close>
                <Button color="gray" variant="surface" highContrast>
                  Cancel
                </Button>
              </Dialog.Close>
              <Button type="submit" variant="outline">
                Update role
              </Button>
            </Flex>
          </form>
        </Section>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default EditRoleDialog;
