import { Table, Button, Flex } from "@radix-ui/themes";
import UserRows from "./UserRows";
import { User } from "../../api/users/types";
import TableSkeletonLoader from "../shared/TableSkeletonLoader";

const UsersTable = ({
  users,
  isPending,
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
}: {
  users: User[];
  isPending: boolean;
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
}) => {
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
        {hasNextOrPrevious && (
          <Table.Row>
            <Table.Cell colSpan={4}>
              <Flex justify="end" gap="2">
                <Button
                  onClick={onPrevious}
                  disabled={!hasPrevious}
                  variant="surface"
                  color="gray"
                  highContrast
                >
                  Previous
                </Button>
                <Button
                  onClick={onNext}
                  disabled={!hasNext}
                  variant="surface"
                  color="gray"
                  highContrast
                >
                  Next
                </Button>
              </Flex>
            </Table.Cell>
          </Table.Row>
        )}
      </Table.Body>
    </Table.Root>
  );
};

export default UsersTable;
