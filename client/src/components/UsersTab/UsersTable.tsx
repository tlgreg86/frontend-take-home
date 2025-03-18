import { Table, Skeleton } from "@radix-ui/themes";
import UserRows from "./UserRows";
import { User } from "../../api/users/types";

const SkeletonLoader = () => {
  return (
    <>
      <Table.Row>
        <Table.Cell>
          <Skeleton width="30%" />
        </Table.Cell>
        <Table.Cell>
          <Skeleton width="30%" />
        </Table.Cell>
        <Table.Cell>
          <Skeleton width="30%" />
        </Table.Cell>
        <Table.Cell>
          <Skeleton width="10%" />
        </Table.Cell>
      </Table.Row>
    </>
  );
};

const UsersTable = ({
  users,
  isPending,
}: {
  users: User[];
  isPending: boolean;
}) => {
  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell width={"30%"}>User</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell width={"30%"}>Role</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell width={"30%"}>Joined</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell width={"10%"} />
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {isPending ? <SkeletonLoader /> : <UserRows users={users} />}
      </Table.Body>
    </Table.Root>
  );
};

export default UsersTable;
