import { StatusBar } from "expo-status-bar";
import React from "react";
import { enableScreens } from "react-native-screens";
import MealsNavigator from "./navigation/navigator";

export default function App() {
  enableScreens();

  return <MealsNavigator />;
}

