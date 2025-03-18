import { Tabs } from "@radix-ui/themes";
import Search from "../Search/Search";
import { useState } from 'react';
import { useDebounce } from 'react-use';
import RolesTable from './RolesTable';
import { useFetchRoles } from '../../api/roles/useFetchRoles';

const RolesTab = () => {
  const [searchParams, setSearchParams] = useState({ page: 1, search: "" });
  const [debouncedSearchParams, setDebouncedSearchParams] =
    useState(searchParams);

  const { isPending, data } = useFetchRoles(debouncedSearchParams);

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
    <Tabs.Content value="roles">
      <Search
        onSearchInputChange={onSearchInputChange}
        placeholderText="Search by role..."
      />
      <RolesTable roles={data?.data} isPending={isPending} />
    </Tabs.Content>
  );
};

export default RolesTab;
