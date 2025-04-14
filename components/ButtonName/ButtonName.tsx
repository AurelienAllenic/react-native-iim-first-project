import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";

const TextInputDisplay: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [submittedText, setSubmittedText] = useState("");

  const handleSubmit = () => {
    setSubmittedText(inputValue);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={setInputValue}
        placeholder="Tapez quelque chose..."
      />
      <TextInput
        style={styles.input}
        onChangeText={setInputValue}
        placeholder="email"
      />
      <Button title="Afficher le texte" onPress={handleSubmit} />
      {submittedText ? (
        <Text style={styles.text}>
          Vous avez tapé : <Text style={styles.highlight}>{submittedText}</Text>
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "80%",
    marginBottom: 20,
    paddingLeft: 10,
  },
  text: {
    marginTop: 20,
    fontSize: 16,
    color: "green",
  },
  highlight: {
    color: "blue",
    fontWeight: "bold",
  },
});

export default TextInputDisplay;
