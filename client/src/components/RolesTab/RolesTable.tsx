import { Table } from "@radix-ui/themes";
import { Role } from "../../api/roles/types";
import RoleRows from "./RoleRows";
import TableSkeletonLoader from "../shared/TableSkeletonLoader";
import EmptyTable from "../shared/EmptyTable";
import PaginationRow from '../shared/PaginationRow';

type RolesTableProps = {
  roles: Role[];
  isPending: boolean;
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
};

const RolesTable = ({
  roles,
  isPending,
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
}: RolesTableProps) => {
  const hasNextOrPrevious = !!hasNext || !!hasPrevious;

  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell width={"25%"}>Role</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell width={"65%"}>
            Description
          </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell width={"10%"} />
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {isPending ? (
          <TableSkeletonLoader columnWidths={["25%", "65%", "10%"]} />
        ) : (
          <RoleRows roles={roles} />
        )}
        {roles?.length === 0 && !isPending && (
          <EmptyTable message="No roles found" />
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

export default RolesTable;
