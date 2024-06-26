import {
  AppShell,
  Burger,
  Container,
  Flex,
  List,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { NavLink, Outlet } from "react-router-dom";

export const App = () => {
  const [opened, { toggle }] = useDisclosure();
  const theme = useMantineTheme();

  return (
    <Container fluid bg="var(--mantine-color-gray-light)">
      <Container size="lg">
        <AppShell header={{ height: 60 }} padding="md">
          <AppShell.Header>
            <Flex align="center" h="100%" px="md" justify="space-between">
              <Burger
                opened={opened}
                onClick={toggle}
                hiddenFrom="sm"
                size="sm"
              />
              <Title order={3}>Radio Stations 📻</Title>
              <List listStyleType="none">
                <List.Item>
                  <NavLink
                    to="/"
                    style={{
                      textDecoration: "none",
                      color: theme.colors.gray[9],
                    }}
                  >
                    Home
                  </NavLink>
                </List.Item>
              </List>
            </Flex>
          </AppShell.Header>
          <AppShell.Main>
            <Outlet />
          </AppShell.Main>
        </AppShell>
      </Container>
    </Container>
  );
};
