import { Button, Flex, TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import AddUserDialog from "../UsersTab/AddUserDialog";
import AddRoleDialog from '../RolesTab/AddRoleDialog';

interface SearchProps {
  placeholderText: string;
  onSearchInputChange: (search: string) => void;
  ariaLabel: string;
  buttonText: string;
  isAddUserDialogOpen?: boolean;
  isAddRoleDialogOpen?: boolean;
  handleDialogClose: () => void;
  handleDialogOpen: () => void;
}

const Search = ({
  buttonText,
  placeholderText,
  onSearchInputChange,
  ariaLabel,
  isAddUserDialogOpen = false,
  isAddRoleDialogOpen = false,
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
      <AddUserDialog open={isAddUserDialogOpen} onClose={handleDialogClose} />
      <AddRoleDialog open={isAddRoleDialogOpen} onClose={handleDialogClose} />
    </>
  );
};

export default Search;
