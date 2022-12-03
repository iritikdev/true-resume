import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
} from "react-native";

import { AppText, Button, Heading } from "../components";
import Logo from "../components/Logo";
import colors from "../config/colors";
import fonts from "../config/fonts";

function WelcomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.primary,
      }}
    >
      <View style={styles.logoContainer}>
        <Logo/>
      </View>
      <View style={styles.introductionContainer}>
        <AppText style={styles.title}>ONLINE RESUME BUILDER</AppText>
        <Heading style={styles.subTitle}>
          Only 2% of resumes make it past the first round. Be in the top 2%
        </Heading>
        <AppText style={styles.para}>
          Use professional field-tested resume templates that follow the exact
          ‘resume rules’ employers look for. Easy to use and done within minutes
          - try now for free!
        </AppText>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          shadow={1}
          color={colors.coaldark}
          title="Register"
          onPress={() => navigation.navigate("Register")}
        />

        <TouchableWithoutFeedback onPress={() => navigation.navigate("Login")}>
          <Text style={styles.skipButton}>Already have an account? Login</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    paddingTop: 100,
    flex: 2,
    
  },
  introductionContainer: {
    flex: 6,
    paddingTop:50,
    alignItems: "center",
    alignSelf: "center",
    width: 320,
  },
  title: {
    fontSize: 13,
  },
  subTitle: {
    fontSize: 20,
    textAlign: "center",
  },
  para: {
    textAlign: "center",
    fontSize: 14,
  },
  
  buttonsContainer: {
    flex: 2,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  skipButton: {
    color: colors.light,
  },
});

export default WelcomeScreen;
