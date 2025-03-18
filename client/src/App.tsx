import { Container, Tabs } from "@radix-ui/themes";
import TabsHeader from "./components/TabsHeader/TabsHeader";
import UsersTab from "./components/UsersTab/UsersTab";
import RolesTab from "./components/RolesTab/RolesTab";
import { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState("users");

  return (
    <Container>
      <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
        <TabsHeader />
        <UsersTab resetSearchParams={activeTab !== "users"} />
        <RolesTab resetSearchParams={activeTab !== "roles"} />
      </Tabs.Root>
    </Container>
  );
}

export default App;
