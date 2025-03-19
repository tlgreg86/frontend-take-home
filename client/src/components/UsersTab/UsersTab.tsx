import { Tabs } from "@radix-ui/themes";
import Search from "../Search/Search";
import UsersTable from "./UsersTable";
import { useFetchUsers } from "../../api/users/useFetchUsers";
import { useEffect, useState } from "react";
import { useDebounce } from "react-use";

interface UsersTabProps {
  resetSearchParams?: boolean;
}

const UsersTab = ({ resetSearchParams }: UsersTabProps) => {
  const [searchParams, setSearchParams] = useState({ page: 1, search: "" });
  const [isAddUserDialogOpen, setIsAddUserDialogOpen] = useState(false);

  const handleDialogOpen = () => setIsAddUserDialogOpen(true);
  const handleDialogClose = () => setIsAddUserDialogOpen(false);

  const [debouncedSearchParams, setDebouncedSearchParams] =
    useState(searchParams);

  const { isPending, data } = useFetchUsers(debouncedSearchParams);

  useDebounce(
    () => {
      setDebouncedSearchParams(searchParams);
    },
    250,
    [searchParams]
  );

  const onSearchInputChange = (search: string) => {
    setSearchParams({ page: 1, search });
  };
  
  useEffect(() => {
    if (resetSearchParams) {
      setSearchParams({ page: 1, search: "" });
    }
  }, [resetSearchParams]);

  return (
    <Tabs.Content value="users">
      <Search
        onSearchInputChange={onSearchInputChange}
        buttonText="+ Add user"
        placeholderText="Search by name..."
        ariaLabel="Search users by name"
        isAddUserDialogOpen={isAddUserDialogOpen}
        handleDialogClose={handleDialogClose}
        handleDialogOpen={handleDialogOpen}
      />
      <UsersTable
        hasNext={!!data?.next}
        hasPrevious={!!data?.prev}
        onNext={() => {
          setSearchParams({ ...searchParams, page: searchParams.page + 1 });
        }}
        onPrevious={() => {
          setSearchParams({ ...searchParams, page: searchParams.page - 1 });
        }}
        users={data?.data}
        isPending={isPending}
      />
    </Tabs.Content>
  );
};

export default UsersTab;
