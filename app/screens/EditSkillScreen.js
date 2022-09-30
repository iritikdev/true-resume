import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { Button, Heading, Screen, TextInputField } from "../components";
import AppDatePicker from "../components/AppDatePicker";
import colors from "../config/colors";

function EditSkillScreen(props) {
  return (
    <Screen style={styles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 60 }}
      >
        {/* <Heading>Basics</Heading> */}
        <TextInputField placeholder={"skill"} icon="account" />
        <TextInputField placeholder={"Skill level"} icon="email" />

        <Button title={"Save Basic Info"} />
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
export default EditSkillScreen;
