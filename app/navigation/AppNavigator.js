import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import NavigationButton from "../navigation/NavigationButton";
import colors from "../config/colors";

import ResumeNavigator from "./ResumeNavigator";
import JobScreen from "../screens/JobScreen";
import SelectTemplateScreen from "../screens/SelectTemplateScreen";
import LetterScreen from "../screens/LetterScreen";
import AccountScreen from "../screens/AccountScreen";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        borderTopWidth: 0,
        position: "absolute",
        elevation: 15,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        height: 70,
        backgroundColor: colors.coaldark,
      },
    }}
  >
    <Tab.Screen
      name="Resume"
      component={ResumeNavigator}
      options={({ navigation }) => ({
        tabBarIcon: ({ focused, color }) => (
          <NavigationButton
            focused
            icon={"circle-edit-outline"}
            title="Resume"
            FontColor={focused ? color : colors.medium}
            iconColor={focused ? color : colors.medium}
            onPress={() => navigation.navigate("Resume")}
            backgroundColor={focused ? colors.accent : null}
          />
        ),
      })}
    />
    <Tab.Screen
      name="Jobs"
      component={JobScreen}
      options={({ navigation }) => ({
        tabBarIcon: ({ focused, color }) => (
          <NavigationButton
            icon={"shopping"}
            title="Jobs"
            FontColor={focused ? color : colors.medium}
            iconColor={focused ? color : colors.medium}
            onPress={() => navigation.navigate("Jobs")}
            backgroundColor={focused ? colors.accent : null}
          />
        ),
      })}
    />

    <Tab.Screen
      name="News"
      component={SelectTemplateScreen}
      options={({ navigation }) => ({
        tabBarIcon: ({ focused, color }) => (
          <NavigationButton
            icon={"cards"}
            title="Templates"
            onPress={() => navigation.navigate("News")}
            FontColor={focused ? color : colors.medium}
            iconColor={focused ? color : colors.medium}
            backgroundColor={focused ? colors.accent : null}
          />
        ),
      })}
    />
    <Tab.Screen
      name="Letters"
      component={LetterScreen}
      options={({ navigation }) => ({
        tabBarIcon: ({ focused, color }) => (
          <NavigationButton
            icon={"file"}
            title="Letters"
            onPress={() => navigation.navigate("Letters")}
            FontColor={focused ? color : colors.medium}
            iconColor={focused ? color : colors.medium}
            backgroundColor={focused ? colors.accent : null}
          />
        ),
      })}
    />
    <Tab.Screen
      name="Account"
      component={AccountScreen}
      options={({ navigation }) => ({
        tabBarIcon: ({ focused, color }) => (
          <NavigationButton
            icon={"menu"}
            title="Account"
            onPress={() => navigation.navigate("Account")}
            FontColor={focused ? color : colors.medium}
            iconColor={focused ? color : colors.medium}
            backgroundColor={focused ? colors.accent : null}
          />
        ),
      })}
    />
  </Tab.Navigator>
);

export default AppNavigator;
