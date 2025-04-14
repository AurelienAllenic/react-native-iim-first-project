import React from "react";
import { View, StyleSheet } from "react-native";

interface ContainerProps {
  children: React.ReactNode; // Déclare que Container prend des enfants (des composants ou du texte)
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <View style={styles.container}>{children}</View>; // Applique les styles aux enfants
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 10,
    backgroundColor: "#f9f9f9", // Exemple de couleur de fond
    borderRadius: 8, // Pour arrondir les bords
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
});

export default Container;
