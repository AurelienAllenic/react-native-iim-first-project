// navigation/TabsNavigator.tsx
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/index"; // ton fichier actuel
import SettingsScreen from "../screens/SettingsScreen";

const Tab = createBottomTabNavigator();

export default function TabsNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Accueil" component={HomeScreen} />
      <Tab.Screen name="Réglages" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
