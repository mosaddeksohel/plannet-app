import { View, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Text from "../components/text/text";
import PlanetHeader from "../components/planet-header";
import { colors } from "../Theme/colors";
import { spacing } from "../Theme/spacing";
import { MercurySvg } from "../svg";

export default function Details({ navigation, route }) {
  const planet = route.params.planet;
  console.log("plannet", planet);

  const renderImage = (name) => {
    switch (name) {
      case "Mercury":
        return <MercurySvg />;
        break;

      default:
        break;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader backbtn={true} />
      <ScrollView>
        <View style={styles.imageView}></View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.black },
  imageView: {
    padding: spacing[5],
    alignItems: "center",
    justifyContent: "center",
  },
});
