import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="profile" />
      <Stack.Screen name="users" />
    </Stack>
  );
}
