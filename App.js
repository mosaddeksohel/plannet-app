import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Text from "./src/components/text/text";
import { colors } from "./src/Theme/colors";
import { spacing } from "./src/Theme/spacing";
import { typography } from "./src/Theme/typography";

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
    <View style={styles.container}>
      <Text preset="h1">Open up to start working on your app!</Text>
      <Text style={{ fontFamily: typography.bold, marginTop: spacing[4] }}>
        Hello world
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey,
    alignItems: "center",
    justifyContent: "center",
  },
});
