import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { Button, Heading, Screen, TextInputField } from "../components";
import AppDatePicker from "../components/AppDatePicker";
import colors from "../config/colors";

function EditExperienceScreen(props) {
  return (
    <Screen style={styles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 60 }}
      >
        
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 8,
    backgroundColor: colors.light,
  },
});
export default EditExperienceScreen;
