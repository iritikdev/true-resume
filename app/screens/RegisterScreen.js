import React from "react";
import { StyleSheet, Image, View } from "react-native";
import * as Yup from "yup";

import { Screen } from "../components";
import AppForm from "../components/AppForm";
import AppFormField from "../components/AppFormField";
import Logo from "../components/Logo";
import SubmitButton from "../components/SubmitButton";
import colors from "../config/colors";

const schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).max(16).label("Password"),
});

function RegisterScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style = {{marginBottom:50}}>
      <Logo tagColor = {colors.black} logoColor = {colors.coaldark}/>
      </View>
      <AppForm
        initialValues={{ name: "", password: "", email: "" }}
        validationSchema={schema}
        onSubmit={(values) => console.log(values)}
      >
        <AppFormField
          name={"name"}
          autoCapitalize="none"
          autoCorrect={false}
          icon={"email"}
          placeholder="Name"
        />
        <AppFormField
          name={"email"}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          icon={"email"}
          placeholder="Email"
        />
        <AppFormField
          name={"password"}
          autoCapitalize="none"
          autoCorrect={false}
          icon={"lock"}
          placeholder="Password"
          secureTextEntry
        />
        <SubmitButton title={"Register"} />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    padding: 10,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
export default RegisterScreen;
