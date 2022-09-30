import React from "react";
import * as Yup from "yup";
import "yup-phone";
import { ScrollView, StyleSheet, View } from "react-native";

import { Screen } from "../components";
import colors from "../config/colors";

import AppForm from "../components/AppForm";
import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/SubmitButton";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  phone: Yup.string().phone().required().label("Phone Number"),
  dob: Yup.string().required().label("Date of Birth"),
  website: Yup.string().url().required().label("Personal Website"),
  address: Yup.string().max(20).required().label("Address"),
  city: Yup.string().required().max(12).label("City"),
  state: Yup.string().required().max(12).label("State"),
  country: Yup.string().required().max(12).label("Country"),
  pin: Yup.string()
    .required()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(6, "Must be exactly 6 digits")
    .max(6, "Must be exactly 6 digits")
    .label("Postal Code"),
});

function NewsScreen(props) {
  return (
    <Screen style={styles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 60 }}
      >
        <AppForm
          initialValues={{
            email: "",
            name: "",
            phone: "",
            website: "",
            address: "",
            city: "",
            state: "",
            country: "",
            pin: "",
            dob: "",
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <AppFormField
            name={"name"}
            autoCapitalize="none"
            autoCorrect={false}
            icon={"account"}
            placeholder="Your Name"
          />
          <AppFormField
            name={"email"}
            autoCapitalize="none"
            autoCorrect={false}
            icon={"email"}
            placeholder="Email"
            keyboardType="email-address"
          />
          <AppFormField
            name={"phone"}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder={"Phone"}
            icon="cellphone"
            keyboardType="numeric"
          />
          <AppFormField
            name={"dob"}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder={"DOB 07-08-2005"}
            icon="calendar-range"
            keyboardType="numeric"
          />
          <AppFormField
            name={"website"}
            autoCapitalize="none"
            autoCorrect={false}
            icon={"web"}
            placeholder="Personal Website - http://www"
            keyboardType="url"
          />
          <AppFormField
            name={"address"}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder={"Address"}
            icon="map-marker"
          />

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ width: "48%" }}>
              <AppFormField
                name={"city"}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder={"City"}
                icon="city-variant"
              />
            </View>
            <View style={{ width: "48%" }}>
              <AppFormField
                name={"state"}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder={"State"}
                icon="home-city"
              />
            </View>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ width: "48%" }}>
              <AppFormField
                name={"country"}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder={"Country"}
                icon="wan"
              />
            </View>
            <View style={{ width: "48%" }}>
              <AppFormField
                name={"pin"}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder={"Postal Code"}
                icon="map-marker-path"
              />
            </View>
          </View>

          <SubmitButton title={"Save Basic Details"} />
        </AppForm>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 8,
    backgroundColor: colors.light,
    marginBottom: 15,
  },
});
export default NewsScreen;
