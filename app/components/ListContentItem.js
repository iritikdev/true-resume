import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";
import fonts from "../config/fonts";
import AppText from "./AppText";

function ListContentItem(props) {
  return (
    <View style={styles.container}>
      <AppText style={styles.title}>LNJP Institute of Technology</AppText>
      <AppText style={styles.subTitle}>
        B.Tech in Computer Science & Engineering
      </AppText>
      <View style={styles.footer}>
        <AppText style={styles.duration}>2019-2023</AppText>
        <AppText style={styles.place}> | Chapra, Bihar</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    padding: 8,
    borderRadius: 10,
    marginTop: 10,
  },
  title: {
    fontFamily: fonts.semi,
    fontSize: 14,
  },
  subTitle: {
    fontFamily: fonts.regular,
    fontSize: 12,
  },
  footer: {
    flexDirection: "row",
  },
  duration: {
    fontFamily: fonts.regular,
    fontSize: 12,
  },
  place: {
    fontFamily: fonts.regular,
    fontSize: 12,
  },
});
export default ListContentItem;
