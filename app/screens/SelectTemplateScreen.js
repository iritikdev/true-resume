import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, View, FlatList, Animated, Image } from "react-native";
import { Icon } from "../components";

import Screen from "../components/Screen";
import colors from "../config/colors";

const templates = [
  {
    id: 1,
    url: require("../assets/r1.png"),
  },
  {
    id: 2,
    url: require("../assets/r2.png"),
  },
  {
    id: 3,
    url: require("../assets/r3.png"),
  },
  {
    id: 4,
    url: require("../assets/r4.png"),
  },
  {
    id: 5,
    url: require("../assets/r5.png"),
  },
];

function SelectTemplateScreen({ otherProps, style }) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={templates}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={{
                elevation: 10,
                height: 470,
                marginVertical: 10,
                overflow: "hidden",
              }}
            >
              <Image
                source={item.url}
                resizeMode="contain"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </View>
          )}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginBottom: 70,
  },
});
export default SelectTemplateScreen;
