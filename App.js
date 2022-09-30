import { NavigationContainer } from "@react-navigation/native";

import useCustomFont from "./app/hooks/useCustomFont";
import AppNavigator from "./app/navigation/AppNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AuthNavigator from "./app/navigation/AuthNavigator";

export default function App() {
  const user = true;
  const loaded = useCustomFont();
  if (!loaded) return null;
  return (
    <NavigationContainer theme={navigationTheme}>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
