import { Table } from "@radix-ui/themes";
import UserRows from './UserRows';
import { User } from '../../api/users/types';

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
          <Table.ColumnHeaderCell>User</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Role</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Joined</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell />
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {isPending && <>loading</>}
        {users && <UserRows users={users} />}
      </Table.Body>
    </Table.Root>
  );
};

export default UsersTable;
