import { Avatar, Flex, Table } from "@radix-ui/themes";
import UserRole from './UserRole';
import { User } from '../../api/users/types';
import ActionMenu from './ActionMenu';

type UserRowsProps = {
  users: User[]
};

const UserRows = ({users}: UserRowsProps) => {
  const formatter = new Intl.DateTimeFormat(undefined, { dateStyle: 'medium' });

  return users?.map((user) => (
    <Table.Row key={user.id} align={"center"}>
      <Table.RowHeaderCell>
        <Flex align={"center"} gap={"3"}>
          <Avatar
            width={5}
            height={5}
            radius="full"
            src={user.photo}
            fallback="A"
          />
          {user.first} {user.last}
        </Flex>
      </Table.RowHeaderCell>
      <Table.Cell>
        <UserRole roleId={user.roleId} />
      </Table.Cell>
      <Table.Cell>{formatter.format(new Date(user.createdAt))}</Table.Cell>
      <Table.Cell align={"center"}>
        <ActionMenu user={user} />
      </Table.Cell>
    </Table.Row>
  ));
};

export default UserRows;
