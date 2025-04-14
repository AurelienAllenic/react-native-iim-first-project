import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";
import { useProps } from "../PropsContext";

const ProfileCard: React.FC = () => {
  const { profileData } = useProps();

  return (
    <View style={styles.card}>
      <Image source={profileData.userImage} style={styles.profileImage} />
      <Text style={styles.userName}>{profileData.userName}</Text>
      <Text style={styles.userDescription}>{profileData.userDescription}</Text>
      <Button title="Suivre" onPress={() => alert("Suivi!")} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  userDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
});

export default ProfileCard;
