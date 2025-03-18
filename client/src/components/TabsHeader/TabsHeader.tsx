import { Tabs } from "@radix-ui/themes";

const TabsHeader = () => {
  return (
    <Tabs.List>
      <Tabs.Trigger value="users">Users</Tabs.Trigger>
      <Tabs.Trigger value="roles">Roles</Tabs.Trigger>
    </Tabs.List>
  );
};

export default TabsHeader;
