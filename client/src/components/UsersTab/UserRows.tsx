import { Avatar, Flex, IconButton, Table } from "@radix-ui/themes";
import UserRole from './UserRole';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { User } from '../../api/users/types';

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
      <Table.Cell>
        <IconButton radius="full" color="gray" variant="ghost">
          <DotsHorizontalIcon />
        </IconButton>
      </Table.Cell>
    </Table.Row>
  ));
};

export default UserRows;
