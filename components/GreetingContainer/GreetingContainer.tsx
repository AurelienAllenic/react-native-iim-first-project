import React, { useState } from "react";
import { View, Button } from "react-native";
import Greeting from "../Greetings/Greeting";
import ListItems from "../ListItems/ListItems"; // adapte le chemin si besoin

interface GreetingContainerProps {
  items: string[];
}

const GreetingContainer: React.FC<GreetingContainerProps> = ({ items }) => {
  const [prenom, setPrenom] = useState(items[0] || "Prénom");

  const handleChangePrenom = () => {
    let nouveauPrenom = prenom;
    while (nouveauPrenom === prenom && items.length > 1) {
      const index = Math.floor(Math.random() * items.length);
      nouveauPrenom = items[index];
    }
    setPrenom(nouveauPrenom);
  };

  return (
    <View style={{ padding: 20 }}>
      <Greeting prenom={prenom} />
      <Button
        title="Changer le prénom au hasard"
        onPress={handleChangePrenom}
      />
    </View>
  );
};

export default GreetingContainer;
