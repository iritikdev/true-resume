import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";

import colors from "../config/colors";
import fonts from "../config/fonts";

function NavigationButton({
  onPress,
  icon,
  title,
  FontColor,
  iconColor,
  backgroundColor,
  // focused,
}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View
        style={{
          width: 60,
          height: 70,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* {focused && (
          <View
            style={{
              height: 5,
              backgroundColor: FontColor,
              width: 30,
              borderRadius: 15,
              position: "absolute",
              top: 5,
            }}
          ></View>
        )} */}
        <MaterialCommunityIcons name={icon} color={iconColor} size={22} />
        <Text style={[styles.text, { color: FontColor }]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: fonts.regular,
    fontSize: 11,
    color: colors.medium,
  },
});

export default NavigationButton;
