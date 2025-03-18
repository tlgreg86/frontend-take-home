import { Flex, TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const Search = ({
  placeholderText,
  onSearchInputChange,
  ariaLabel,
}: {
  placeholderText: string;
  onSearchInputChange: (searchInput: string) => void;
  ariaLabel: string;
}) => {
  return (
    <Flex gap="2" style={{ margin: "24px 0px" }}>
      <TextField.Root
        onChange={(e) => onSearchInputChange(e.target.value)}
        style={{ flex: 1 }}
        placeholder={placeholderText}
        aria-label={ariaLabel}
      >
        <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>
    </Flex>
  );
};

export default Search;
