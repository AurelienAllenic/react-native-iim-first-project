import React from "react";
import { Image } from "react-native";
import { PropsProvider } from "../../components/PropsContext";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import Header from "@/components/Header/Header";
import Card from "@/components/Card/Card";
import ProfileCard from "@/components/ProfileCard/ProfileCard";
import GreetingContainer from "@/components/GreetingContainer/GreetingContainer";
import Toggle from "@/components/Toggle/Toggle";
import TextInputAndClickCounter from "@/components/ButtonClick/ButtonClick";
import Container from "@/components/Container/Container";

export default function HomeScreen() {
  return (
    <PropsProvider>
      <ParallaxScrollView
        headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
        headerImage={
          <Image
            source={require("@/assets/images/back-native.jpg")}
            style={{ width: "100%", height: "100%" }}
          />
        }
      >
        <ThemedView>
          <Container>
            <Header />
            <Toggle />
            <TextInputAndClickCounter />
            <GreetingContainer />
            <Card cardIndex={0} />
            <Card cardIndex={1} />
            <Card cardIndex={2} />
            <ProfileCard />
          </Container>
        </ThemedView>
      </ParallaxScrollView>
    </PropsProvider>
  );
}
