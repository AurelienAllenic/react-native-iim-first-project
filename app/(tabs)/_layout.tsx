// TabLayout.tsx ou layout.tsx (fichier dans ton dossier de tabs)
import { Tabs } from "expo-router";
import React from "react";
import { Platform, TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  // Fonction pour revenir en arrière
  const handleGoBack = () => {
    router.back(); // Retourne à la page précédente
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false, // Aucun en-tête par défaut
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="paperplane.fill" color={color} />
          ),
          // Ajouter le bouton retour ici dans explore
          headerShown: true, // Montre un header
          headerLeft: () => (
            <TouchableOpacity onPress={handleGoBack}>
              <Text style={{ color: Colors[colorScheme ?? "light"].tint }}>
                Retour
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
    </Tabs>
  );
}
