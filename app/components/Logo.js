import React from "react";
import { StyleSheet, View } from "react-native";
import fonts from "../config/fonts";
import colors from "../config/colors";
import Heading from "./Heading";
import AppText from "./AppText";

function Logo({tagColor, logoColor}) {
    
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Heading
          style={{
            fontFamily: fonts.glight,
            color: colors.coaldark,
            fontSize: 18,
          }}
        >
          TRUE
        </Heading>
        <Heading style={[styles.logo, {color: logoColor ? logoColor : colors.white}]}>Resume</Heading>
      </View>
      <AppText style={[styles.tagline, {color: tagColor ? tagColor : colors.white}]}>Create resume with no tears</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  logo: {
    fontSize: 32,
    fontFamily: fonts.gbold,
  },
  tagline: {
    textTransform: "uppercase",
    fontWeight: "300",
    fontSize: 12,
    fontFamily: fonts.light,
    letterSpacing: 2.2,
  },
});
export default Logo;
