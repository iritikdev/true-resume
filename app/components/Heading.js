import React from "react";
import { StyleSheet, Text } from "react-native";
import fonts from "../config/fonts";

function Heading({ children, style }) {
  return <Text style={[styles.heading, style]}>{children} </Text>;
}

const styles = StyleSheet.create({
  heading: {
    
    marginTop: 5,
    marginBottom: 5,
    fontFamily: fonts.gbold,
    fontSize: 22,
  },
});
export default Heading;
