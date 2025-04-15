// screens/SettingsScreen.tsx
import { Link } from "expo-router";
import React from "react";
import { View, Text } from "react-native";

export default function Settings() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Page Réglages</Text>
      <Link href="/testpage">Test</Link>
    </View>
  );
}
