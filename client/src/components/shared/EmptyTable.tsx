import { Table } from "@radix-ui/themes";

interface EmptyTableProps{
  message: string;
};

const EmptyTable = ({ message }: EmptyTableProps) => {
  return (
    <Table.Row>
      <Table.Cell justify={"center"} align={"center"} colSpan={4}>
        {message}
      </Table.Cell>
    </Table.Row>
  );
};

export default EmptyTable;
