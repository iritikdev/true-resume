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
    title: "My Resumes",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.accent,
    },
  },
  {
    title: "Notification",
    icon: {
      name: "email",
      backgroundColor: colors.accent,
    },
  },
  // {
  //   title: "Settings",
  //   icon: {
  //     name: "cog-outline",
  //     backgroundColor: colors.accent,
  //   },
  //   // targetScreen: routes.MESSAGES,
  // },
  {
    title: "Support and Feedback",
    icon: {
      name: "phone",
      backgroundColor: colors.accent,
    },
    // targetScreen: routes.MESSAGES,
  },
  
  {
    title: "Terms and Conditions",
    icon: {
      name: "file-document",
      backgroundColor: colors.accent,
    },
    // targetScreen: routes.MESSAGES,
  },
  
  {
    title: "Privacy Policy",
    icon: {
      name: "lock",
      backgroundColor: colors.accent,
    },
    // targetScreen: routes.MESSAGES,
  },
  {
    title: "Share with friends",
    icon: {
      name: "share-variant",
      backgroundColor: colors.accent,
    },
    // targetScreen: routes.MESSAGES,
  },
  {
    title: "Rate the App",
    icon: {
      name: "message",
      backgroundColor: colors.accent,
    },
    // targetScreen: routes.MESSAGES,
  },
];

function AccountScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
        style = {{
          backgroundColor:colors.coaldark
        }}
          title={"Ritik Sharma"}
          titleColor= {colors.light}
          subTitle={"iritikdev@gmail.com"}
          image={require("../assets/me.webp")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              chevron={true}
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                  iconColor={colors.primary}
                />
              }
              // onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        // onPress={handleLogOut}
        title="About"
        IconComponent={
          <Icon
            name="information"
            backgroundColor={colors.accent}
            iconColor={colors.primary}
          />
        }
      />
      <ListItemSeparator />
      <ListItem
        // onPress={handleLogOut}
        title="Log Out"
        IconComponent={
          <Icon
            name="logout"
            backgroundColor={colors.accent}
            iconColor={colors.primary}
          />
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginBottom: 10,
    // marginTop: 10,
  },
});

export default AccountScreen;
