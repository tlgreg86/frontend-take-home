import { Container, Tabs } from "@radix-ui/themes";
import TabsHeader from "./components/TabsHeader/TabsHeader";
import UsersTab from './components/UsersTab/UsersTab';
import RolesTab from './components/RolesTab/RolesTab';

function App() {
  return (
    <Container>
      <Tabs.Root defaultValue="users">
        <TabsHeader />
        <UsersTab />
        <RolesTab />
      </Tabs.Root>
    </Container>
  );
}

export default App;
