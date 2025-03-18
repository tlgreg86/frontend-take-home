import { Tabs } from "@radix-ui/themes";
import Search from "../Search/Search";
import UsersTable from "./UsersTable";
import { useFetchUsers } from "../../api/users/useFetchUsers";
import { useState } from "react";
import { useDebounce } from "react-use";

const UsersTab = () => {
  const [searchParams, setSearchParams] = useState({ page: 1, search: "" });
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
  return (
    <Tabs.Content value="users">
      <Search
        onSearchInputChange={onSearchInputChange}
        placeholderText="Search by name..."
        ariaLabel="Search users by name"
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
