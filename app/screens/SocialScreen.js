import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Button, Heading, Screen, TextInputField } from "../components";
import AppDatePicker from "../components/AppDatePicker";
import colors from "../config/colors";

function NewsScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ width: "48%" }}>
          <TextInputField placeholder={"Network"} icon="spider-web" />
        </View>
        <View style={{ width: "48%" }}>
          <TextInputField placeholder={"Username"} icon="at" />
        </View>
      </View>
      <TextInputField placeholder={"Website"} icon="web-check" />

      <Button title={"Save Basic Info"} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 8,
    backgroundColor: colors.light,
  },
});
export default NewsScreen;
