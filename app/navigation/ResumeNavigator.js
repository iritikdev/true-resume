import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AddResumeScreen from "../screens/AddResumeScreen";
import SocialScreen from "../screens/SocialScreen";
import EditBasicDetailScreen from "../screens/EditBasicDetailScreen";
import EditEducationScreen from "../screens/EditEducationScreen";
import EditSkillScreen from "../screens/EditSkillScreen";
import EditExperienceScreen from "../screens/EditExperienceScreen";
import fonts from "../config/fonts";
import colors from "../config/colors";

const Stack = createNativeStackNavigator();

const ResumeNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="AddResumeScreen" component={AddResumeScreen} />
    <Stack.Screen
      name="EditBasicDetailScreen"
      component={EditBasicDetailScreen}
      options={{
        headerShown: true,
        title: "Edit Basic Details",
        headerTitleStyle: {
          fontFamily: fonts.bold,
          fontSize: 18,
          color: colors.medium,
        },
      }}
    />
    <Stack.Screen name="SocialScreen" component={SocialScreen} />
    <Stack.Screen name="EditSkillScreen" component={EditSkillScreen} />
    <Stack.Screen
      name="EditExperienceScreen"
      component={EditExperienceScreen}
    />
    <Stack.Screen name="EditEducationScreen" component={EditEducationScreen} />
  </Stack.Navigator>
);

export default ResumeNavigator;
