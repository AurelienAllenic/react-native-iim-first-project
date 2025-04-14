import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface GreetingProp {
  prenom: string;
}

const Greeting: React.FC<GreetingProp> = ({ prenom = "test" }) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.title}>
        Ce composant a été codé avec passion par {prenom}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: "#555",
  },
});

export default Greeting;
