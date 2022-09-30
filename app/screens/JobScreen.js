import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import colors from "../config/colors";
import Icon from "../components/Icon";
// import routes from '../navigation/routes';
import Screen from "../components/Screen";
// import AuthContext from '../auth/context';
// import authStorage from '../auth/storage';

const menuItems = [
  {
    title: "User-Interface Designer",
    subTitle: "Google Inc.",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.accent,
    },
  },
  {
    title: "UI/UX Designer",
    subTitle: "MicroSoft Inc.",
    icon: {
      name: "email",
      backgroundColor: colors.accent,
    },
  },

  {
    title: "Support Enginner",
    subTitle: "Suven Consultant Private Limited",
    icon: {
      name: "phone",
      backgroundColor: colors.accent,
    },
    // targetScreen: routes.MESSAGES,
  },
];

function JobScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              chevron={true}
              title={item.title}
              subTitle={item.subTitle}
              image={require("../assets/c1.png")}
              // onPress={() => navigation.navigate(item.targetScreen)}
            />
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
    marginBottom: 10,
    marginTop: 10,
  },
});

export default JobScreen;
