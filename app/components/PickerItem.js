import React from "react";
import { TouchableWithoutFeedback, StyleSheet, View } from "react-native";
import AppText from "./AppText";

function PickerItem({ label, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <AppText style={styles.text}>{label}</AppText>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  text: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
export default PickerItem;
