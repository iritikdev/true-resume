import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";
import fonts from "../config/fonts";
import colors from "../config/colors";

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerTitleStyle: { fontFamily: fonts.bold, color: colors.medium },
      headerTitleAlign: "center",
    }}
    mode="modal"
  >
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);

export default AppNavigator;
