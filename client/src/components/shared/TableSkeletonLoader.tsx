import { Table, Skeleton } from "@radix-ui/themes";

const TableSkeletonLoader = ({
  rowCount = 5,
  columnWidths = ["30%", "30%", "30%", "10%"],
}: {
  rowCount?: number;
  columnWidths: string[];
}) => {
  return (
    <>
      {Array.from({ length: rowCount }).map((_, rowIndex) => (
        <Table.Row key={rowIndex}>
          {columnWidths.map((width, colIndex) => (
            <Table.Cell key={colIndex}>
              <Skeleton width={width} />
            </Table.Cell>
          ))}
        </Table.Row>
      ))}
    </>
  );
};

export default TableSkeletonLoader;