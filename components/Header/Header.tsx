import React from "react";
import { Text, StyleSheet } from "react-native";
import { useProps } from "../PropsContext";

const Header: React.FC = () => {
  const { message } = useProps();

  return <Text style={styles.text}>{message}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#007bff",
  },
});

export default Header;
