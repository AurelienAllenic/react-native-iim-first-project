import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";

const TextInputAndClickCounter: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [submittedText, setSubmittedText] = useState("");
  const [clickCount, setClickCount] = useState(0);

  const [emailInput, setEmailInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (text: string) => {
    setEmailInput(text);

    if (text.length > 140) {
      setErrorMessage("⚠️ Le message ne peut pas dépasser 140 caractères.");
    } else {
      setErrorMessage("");
    }
  };

  const handleTextSubmit = () => {
    setSubmittedText(inputValue);
  };

  const handleCountClick = () => {
    setClickCount((prev) => prev + 1);
  };

  const wordCount =
    emailInput.trim() === "" ? 0 : emailInput.trim().split(/\s+/).length;
  const sentenceCount = emailInput
    .split(/[.!?]+/)
    .filter((s) => s.trim().length > 0).length;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={setInputValue}
        placeholder="Tapez quelque chose..."
      />

      <TextInput
        style={styles.textarea}
        placeholder="email"
        value={emailInput}
        onChangeText={handleEmailChange}
      />
      <View style={styles.containerIndications}>
        <Text style={styles.textItalic}>Caractères : {emailInput.length}</Text>
        <Text style={styles.textItalic}>Mots : {wordCount}</Text>
        <Text style={styles.textItalic}>Phrases : {sentenceCount}</Text>

        {errorMessage !== "" && (
          <Text style={[styles.text, { color: "red" }]}>{errorMessage}</Text>
        )}
      </View>
      <Button title="Afficher le texte" onPress={handleTextSubmit} />

      {submittedText !== "" && (
        <Text style={styles.text}>Vous avez tapé : {submittedText}</Text>
      )}

      <View style={styles.separator} />

      <Button title="Clique-moi" onPress={handleCountClick} />
      <Text style={styles.textClic}>Nombre de clics : {clickCount}</Text>
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
    marginBottom: 10,
    paddingLeft: 10,
  },
  text: {
    marginTop: 5,
    fontSize: 16,
    color: "black",
  },
  textarea: {
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
  textItalic: {
    fontStyle: "italic",
    color: "#555",
    fontSize: 14,
  },
});

export default TextInputAndClickCounter;
