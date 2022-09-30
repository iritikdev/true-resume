import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
} from "react-native";

import { AppText, Button } from "../components";
import fonts from "../config/fonts";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={require("../assets/d1.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          shadow={0}
          title="Register"
          onPress={() => navigation.navigate("Register")}
        />

        <TouchableWithoutFeedback onPress={() => navigation.navigate("Login")}>
          <Text style={styles.skipButton}>Already have an account? Login</Text>
        </TouchableWithoutFeedback>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 300,
    height: 300,
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
  skipButton: {
    marginTop: 10,
    fontFamily: fonts.regular,
    textAlign: "center",
    textDecorationLine: "underline",
  },
});

export default WelcomeScreen;
