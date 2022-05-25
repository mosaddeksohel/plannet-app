import { View, StyleSheet } from "react-native";
import React from "react";
import Text from "./text/text";
import { spacing } from "../Theme/spacing";

export default function PlanetHeader() {
  return (
    <View>
      <Text style={styles.container} preset="h2">
        THE PLANETS
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing[5],
  },
});
