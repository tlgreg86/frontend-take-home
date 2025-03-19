import { Button, Flex, Table } from '@radix-ui/themes';

type PaginationRowProps = {
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
};

const PaginationRow = ({
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
}: PaginationRowProps) => {
  return (
    <Table.Row>
      <Table.Cell colSpan={4}>
        <Flex justify="end" gap="2">
          <Button
            onClick={onPrevious}
            disabled={!hasPrevious}
            variant="surface"
            color="gray"
            highContrast
            aria-label="Go to previous page"
          >
            Previous
          </Button>
          <Button
            onClick={onNext}
            disabled={!hasNext}
            variant="surface"
            color="gray"
            highContrast
            aria-label="Go to next page"
          >
            Next
          </Button>
        </Flex>
      </Table.Cell>
    </Table.Row>
  );
};

export default PaginationRow;
