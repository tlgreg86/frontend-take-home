import { Tabs } from "@radix-ui/themes";
import Search from "../Search/Search";
import {
  useEffect,
  useState } from "react";
import { useDebounce } from "react-use";
import RolesTable from "./RolesTable";
import { useFetchRoles } from "../../api/roles/useFetchRoles";

interface RolesTabProps {
  resetSearchParams?: boolean;
}

const RolesTab = ({ resetSearchParams }: RolesTabProps) => {
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

  useEffect(() => {
    if (resetSearchParams) {
      setSearchParams({ page: 1, search: "" });
    }
  }, [resetSearchParams]);    

  return (
    <Tabs.Content value="roles">
      <Search
        onSearchInputChange={onSearchInputChange}
        placeholderText="Search by role..."
        ariaLabel="Search roles by name"
      />
      <RolesTable roles={data?.data} isPending={isPending} />
    </Tabs.Content>
  );
};

export default RolesTab;
