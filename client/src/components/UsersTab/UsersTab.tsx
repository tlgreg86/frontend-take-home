import { Tabs } from "@radix-ui/themes";
import UsersTable from "./UsersTable";
import { useGetUsers } from "../../api/users/useGetUsers";

const UsersTab = () => {
  const {
    isPending,
    data,
  } = useGetUsers();

  return (
    <Tabs.Content value="users">
      <UsersTable
        users={data?.data}
        isPending={isPending}
      />
    </Tabs.Content>
  );
};

export default UsersTab;
