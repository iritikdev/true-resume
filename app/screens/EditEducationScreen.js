import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { Button, Heading, Screen, TextInputField } from "../components";
import AppDatePicker from "../components/AppDatePicker";
import colors from "../config/colors";

function NewsScreen(props) {
  return (
    <Screen style={styles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 60 }}
      >
        {/* <Heading>Basics</Heading> */}
        <TextInputField placeholder={"Degree/ Field Of Study"} icon="account" />
        <TextInputField placeholder={"Institution"} icon="email" />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ width: "48%" }}>
            <TextInputField placeholder={"City"} icon="web" />
          </View>
          <View style={{ width: "48%" }}>
            <TextInputField placeholder={"Country"} icon="web" />
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ width: "48%" }}>
            <AppDatePicker placeholder={" Start Date"} icon="calendar-range" />
          </View>
          <View style={{ width: "48%" }}>
            <AppDatePicker placeholder={" End Date"} icon="calendar-range" />
          </View>
        </View>

        <TextInputField
          placeholder={"Description"}
          icon="cellphone"
          numberOfLines={5}
        />

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
export default NewsScreen;
