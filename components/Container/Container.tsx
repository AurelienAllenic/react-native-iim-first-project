import React from "react";
import { View, StyleSheet } from "react-native";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    textAlign: "center",
    paddingBottom: 20,
  },
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
    height: "100%",
    width: "100%",
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "80%",
    marginBottom: 10,
    paddingLeft: 10,
  },
  textarea: {
    minHeight: 100,
    borderWidth: 1,
    borderColor: "gray",
    minWidth: "80%",
    marginBottom: 10,
    textAlignVertical: "top",
    textAlign: "left",
  },
  containerIndications: {
    padding: 20,
    justifyContent: "center",
    alignItems: "flex-start",
    width: "80%",
  },
  separator: {
    marginTop: 20,
    flexDirection: "column",
    gap: 20,
  },
  textClic: {
    marginTop: 20,
  },
});

export default Container;
