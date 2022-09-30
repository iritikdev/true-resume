import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Icon({
  style,
  name,
  size = 32,
  backgroundColor = "#000",
  iconColor = "#fff",
}) {
  return (
    <View
      style={[
        {
          width: size,
          height: size,
          borderRadius: 8,
          backgroundColor,
          justifyContent: "center",
          alignItems: "center",
        },
        style,
      ]}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.6} />
    </View>
  );
}

export default Icon;
