import React from "react";
import { View, Button } from "react-native";
import Greeting from "../Greetings/Greeting";
import { useProps } from "../PropsContext";

const GreetingContainer: React.FC = () => {
  const { prenom, setPrenom, items } = useProps();

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
