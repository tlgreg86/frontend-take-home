import { Table, Skeleton } from "@radix-ui/themes";
import { Role } from "../../api/roles/types";
import RoleRows from "./RoleRows";

const SkeletonLoader = () => {
  return (
    <>
      <Table.Row>
        <Table.Cell>
          <Skeleton width="25%" />
        </Table.Cell>
        <Table.Cell>
          <Skeleton width="65%" />
        </Table.Cell>
        <Table.Cell>
          <Skeleton width="10%" />
        </Table.Cell>
      </Table.Row>
    </>
  );
};

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
        {isPending ? <SkeletonLoader /> : <RoleRows roles={roles} />}
      </Table.Body>
    </Table.Root>
  );
};

export default RolesTable;
