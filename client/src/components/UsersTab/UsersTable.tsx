import { Table } from "@radix-ui/themes";
import UserRows from "./UserRows";
import { User } from "../../api/users/types";
import TableSkeletonLoader from '../shared/TableSkeletonLoader';


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
        {isPending ? (
          <TableSkeletonLoader columnWidths={["30%", "30%", "30%", "10%"]} />
        ) : (
          <UserRows users={users} />
        )}
      </Table.Body>
    </Table.Root>
  );
};

export default UsersTable;
