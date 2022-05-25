import { View } from "react-native";
import React from "react";
import Text from "../components/text/text";
import { SafeAreaView } from "react-native-safe-area-context";
import PlanetHeader from "../components/planet-header";

export default function Home() {
  return (
    <SafeAreaView>
      <PlanetHeader />
    </SafeAreaView>
  );
}
