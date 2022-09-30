import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

import colors from "../config/colors";
import fonts from "../config/fonts";

function AppTextInput({ icon, width = "100%" }) {
  const [date, setDate] = useState();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const formatDate = (date) => {
    const month = monthNames[date.getMonth()];
    return `${date.getDate()} ${month} ${date.getFullYear()}`;
  };
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode("date");
  };

  return (
    <TouchableWithoutFeedback onPress={showDatepicker}>
      <View style={[styles.container, { width }]}>
        {icon && (
          <MaterialCommunityIcons
            name={icon}
            size={20}
            color={colors.medium}
            style={styles.icon}
          />
        )}
        <Text style={styles.text}>
          {" "}
          {date ? formatDate(date) : "Date of Birth"}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 10,
    flexDirection: "row",
    marginVertical: 8,
    padding: 15,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontFamily: fonts.regular,
    width: "100%",
    color: colors.medium,
  },
});

export default AppTextInput;
