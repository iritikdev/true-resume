import React from "react";
import { Text, StyleSheet } from "react-native";
import fonts from "../config/fonts";

function AppText({ children, style, ...otherProps }) {
  return (
    <Text style={[styles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.regular,
    fontSize: 16,
  },
});

export default AppText;
