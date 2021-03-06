import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Text from "./src/components/text/text";
import { colors } from "./src/Theme/colors";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/home";
import Details from "./src/screens/details";

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    "Sparthan-Regular": require("./assets/fonts/Spartan-Regular.ttf"),
    "Sparthan-Bold": require("./assets/fonts/Spartan-Bold.ttf"),
    "Antonio-Medium": require("./assets/fonts/Antonio-Medium.ttf"),
  });

  if (!loaded) {
    return <Text>Font is loading...</Text>;
  }
  return (
    <>
      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: "center",
    justifyContent: "center",
  },
});
