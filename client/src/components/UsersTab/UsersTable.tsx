import { Table } from "@radix-ui/themes";
import UserRows from "./UserRows";
import { User } from "../../api/users/types";
import TableSkeletonLoader from "../shared/TableSkeletonLoader";
import EmptyTable from "../shared/EmptyTable";
import PaginationRow from "../shared/PaginationRow";

type UsersTableProps = {
  users: User[];
  isPending: boolean;
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
};

const UsersTable = ({
  users = [],
  isPending,
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
}: UsersTableProps) => {
  const hasNextOrPrevious = !!hasNext || !!hasPrevious;

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
        {users?.length === 0 && !isPending && (
          <EmptyTable message="No users found" />
        )}
        {hasNextOrPrevious && (
          <PaginationRow
            onPrevious={onPrevious}
            onNext={onNext}
            hasPrevious={hasPrevious}
            hasNext={hasNext}
          />
        )}
      </Table.Body>
    </Table.Root>
  );
};

export default UsersTable;
