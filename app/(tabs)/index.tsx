import { Image, StyleSheet, Platform, Text } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Header from "@/components/Header/Header";
import Card from "@/components/Card/Card";
import Container from "@/components/Container/Container";
import ProfileCard from "@/components/ProfileCard/ProfileCard";
import Greeting from "@/components/Greetings/Greeting";
import GreetingContainer from "@/components/GreetingContainer/GreetingContainer";

export default function HomeScreen() {
  const items = ["Alice", "Bob", "Charlie", "Diana"];
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <Container>
          <Header />
          <GreetingContainer items={items} />
          <Card title="carte1" description="description de la carte 1" />
          <Card title="carte2" description="description de la carte 2" />
          <Card title="carte3" description="description de la carte 3" />
          <ProfileCard
            userName="John Doe"
            userDescription="Développeur React Native"
            userImage={require("@/assets/images/user.png")}
          />
        </Container>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
