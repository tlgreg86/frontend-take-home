import {
  Button,
  Flex,
  Text,
  Dialog,
  TextField,
  Section,
} from "@radix-ui/themes";
import { useState } from "react";
import { useCreateRole } from "../../api/roles/useCreateRole";

interface AddUserDialogProps {
  open: boolean;
  onClose: () => void;
}

const AddRoleDialog = ({ open, onClose }: AddUserDialogProps) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const { mutateAsync } = useCreateRole();

  const handleUpdateRole = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await mutateAsync(
        { ...{ name, description } },
        {
          onSuccess: () => {
            onClose();
          },
        }
      );
    } catch (error) {
      console.error("Failed create role", error);
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Content>
        <Dialog.Title>Add role</Dialog.Title>
        <Dialog.Description>
          <Text>Create a new role.</Text>
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
                <Button
                  onClick={onClose}
                  color="gray"
                  variant="surface"
                  highContrast
                >
                  Cancel
                </Button>
              </Dialog.Close>
              <Button type="submit" variant="outline">
                Create role
              </Button>
            </Flex>
          </form>
        </Section>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default AddRoleDialog;
