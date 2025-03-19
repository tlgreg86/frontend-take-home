import {
  Button,
  Flex,
  Text,
  Dialog,
  TextField,
  Section,
  Select,
} from "@radix-ui/themes";
import { useState } from "react";
import { useCreateUser } from "../../api/users/useCreateUser";
import { useFetchRoles } from "../../api/roles/useFetchRoles";

type AddUserDialogProps = {
  open: boolean;
  onClose: () => void;
};

const AddUserDialog = ({ open, onClose }: AddUserDialogProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [roleId, setRoleId] = useState("");

  const { mutateAsync } = useCreateUser();
  const { data: roles, isPending: isRolesLoading } = useFetchRoles();

  const handleUpdateRole = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await mutateAsync(
        { ...{ firstName, lastName, roleId } },
        {
          onSuccess: () => {
            onClose();
          },
        }
      );
    } catch (error) {
      console.error("Failed create user", error);
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Content>
        <Dialog.Title>Add user</Dialog.Title>
        <Dialog.Description>
          <Text>Create a new user.</Text>
        </Dialog.Description>
        <Section size={"1"}>
          <form onSubmit={handleUpdateRole}>
            <Flex direction="column" gap="3">
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  First name
                </Text>
                <TextField.Root
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </label>

              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Last name
                </Text>
                <TextField.Root
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </label>

              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Role
                </Text>
                <Select.Root
                  value={roleId}
                  onValueChange={(value) => setRoleId(value)}
                >
                  <Select.Trigger
                    style={{ width: "100%" }}
                    disabled={isRolesLoading}
                    placeholder={
                      isRolesLoading ? "Fetching Roles..." : "Choose a role"
                    }
                  />
                  <Select.Content>
                    {roles?.data?.map((role) => (
                      <Select.Item key={role.id} value={role.id}>
                        {role.name}
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select.Root>
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
                Create user
              </Button>
            </Flex>
          </form>
        </Section>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default AddUserDialog;
