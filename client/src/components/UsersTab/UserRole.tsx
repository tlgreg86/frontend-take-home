import { Spinner, Text } from "@radix-ui/themes";
import { useFetchRoles } from "../../api/roles/useFetchRoles";
import { Role } from "../../api/roles/types";

type UserRoleProps = {
  roleId: string;
};

const UserRole = ({ roleId }: UserRoleProps) => {
  const { isPending, isError, data } = useFetchRoles();
  const roleName = data?.data.find((role: Role) => role.id === roleId)?.name;

  if (isError) return <Text>Error fetching role</Text>;
  if (isPending) return <Spinner />;
  if (roleName) return <Text>{roleName}</Text>;
  return <Text>Unknown</Text>;
};

export default UserRole;
