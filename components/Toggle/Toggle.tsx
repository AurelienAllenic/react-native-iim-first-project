import React, { useState } from "react";
import { View, Button } from "react-native";

const Toggle: React.FC = () => {
  const [isToggled, setIsToggled] = useState<"on" | "off">("off");

  const handleToggle = () => {
    setIsToggled((prev) => (prev === "on" ? "off" : "on"));
  };

  return (
    <View style={{ padding: 20 }}>
      <Button title={isToggled} onPress={handleToggle} />
    </View>
  );
};

export default Toggle;
