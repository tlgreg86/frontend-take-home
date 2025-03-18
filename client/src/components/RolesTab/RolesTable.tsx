import { Table } from "@radix-ui/themes";
import { Role } from "../../api/roles/types";
import RoleRows from "./RoleRows";
import TableSkeletonLoader from '../shared/TableSkeletonLoader';

const RolesTable = ({
  roles,
  isPending,
}: {
  roles: Role[];
  isPending: boolean;
}) => {
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
      </Table.Body>
    </Table.Root>
  );
};

export default RolesTable;
