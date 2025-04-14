import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useProps } from "../PropsContext";

interface CardProps {
  cardIndex: number;
}

const Card: React.FC<CardProps> = ({ cardIndex }) => {
  const { cardData } = useProps();
  const card = cardData[cardIndex];

  if (!card) return null;

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.title}>{card.title}</Text>
      <Text style={styles.description}>{card.description}</Text>
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

export default Card;
