import store from "../redux/store";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";

export default function RootLayout() {
  return (

    <Provider store={store}>
    <StatusBar  barStyle='light-content' backgroundColor='transparent' />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </Provider>
  );
}
