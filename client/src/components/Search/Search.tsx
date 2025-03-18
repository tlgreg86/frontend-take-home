import { Button, Flex, TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import AddUserDialog from "../UsersTab/AddUserDialog";

interface SearchProps {
  placeholderText: string;
  onSearchInputChange: (search: string) => void;
  ariaLabel: string;
  buttonText: string;
  isDialogOpen: boolean;
  handleDialogClose: () => void;
  handleDialogOpen: () => void;
}

const Search = ({
  buttonText,
  placeholderText,
  onSearchInputChange,
  ariaLabel,
  isDialogOpen,
  handleDialogClose,
  handleDialogOpen,
}: SearchProps) => {
  return (
    <>
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
        <Button onClick={handleDialogOpen}>{buttonText}</Button>
      </Flex>
      <AddUserDialog open={isDialogOpen} onClose={handleDialogClose} />
    </>
  );
};

export default Search;
