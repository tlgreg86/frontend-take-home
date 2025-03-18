import { Table } from "@radix-ui/themes";
import { Role } from "../../api/roles/types";
import RolesActionMenu from "./RolesActionMenu";

type UserRowsProps = {
  roles: Role[];
};

const RoleRows = ({ roles }: UserRowsProps) => {
  return roles?.map((role) => (
    <Table.Row key={role.id} align={"center"}>
      <Table.RowHeaderCell>{role.name}</Table.RowHeaderCell>
      <Table.Cell>{role.description}</Table.Cell>
      <Table.Cell align={"center"}>
        <RolesActionMenu role={role} />
      </Table.Cell>
    </Table.Row>
  ));
};

export default RoleRows;
