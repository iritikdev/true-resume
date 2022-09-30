import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import fonts from "../config/fonts";

function AppTextInput({ icon, width = "100%", ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={colors["white-7"]}
        style={styles.text}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // elevation: 1,
    backgroundColor: colors.white,
    borderRadius: 10,
    flexDirection: "row",
    padding: 15,
    marginVertical: 8,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
    width: "100%",
    color: colors.medium,
    fontFamily: fonts.regular,
  },
});

export default AppTextInput;
