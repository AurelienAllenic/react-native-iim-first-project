import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface ListItemsProps {
  items: string[];
  onItemPress?: (item: string) => void;
}

const ListItems: React.FC<ListItemsProps> = ({ items, onItemPress }) => {
  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => onItemPress?.(item)}>
          <Text style={styles.item}>• {item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
  },
  item: {
    fontSize: 16,
    marginVertical: 6,
    color: "#333",
  },
});

export default ListItems;
