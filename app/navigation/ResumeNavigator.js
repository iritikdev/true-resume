import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AddResumeScreen from "../screens/AddResumeScreen";
import SocialScreen from "../screens/SocialScreen";
import EditBasicDetailScreen from "../screens/EditBasicDetailScreen";
import EditEducationScreen from "../screens/EditEducationScreen";
import EditSkillScreen from "../screens/EditSkillScreen";
import EditExperienceScreen from "../screens/EditExperienceScreen";
import EditProjectScreen from "../screens/EditProjectScreen";
import EditAwardScreen from "../screens/EditAwardScreen";
import EditSummaryScreen from "../screens/EditSummaryScreen";
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
          fontFamily: fonts.gbold,
          fontSize: 18,
          color: colors.medium,
        },
      }}
    />
    <Stack.Screen
      name="EditEducationScreen"
      component={EditEducationScreen}
      options={{
        headerShown: true,
        title: "Add Education Details",
        headerTitleStyle: {
          fontFamily: fonts.gbold,
          fontSize: 18,
          color: colors.medium,
        },
      }}
    />
    <Stack.Screen name="SocialScreen" component={SocialScreen} />
    <Stack.Screen
      name="EditSkillScreen"
      component={EditSkillScreen}
      options={{
        headerShown: true,
        title: "Add Skill Details",
        headerTitleStyle: {
          fontFamily: fonts.gbold,
          fontSize: 18,
          color: colors.medium,
        },
      }}
    />
    <Stack.Screen
      name="EditExperienceScreen"
      component={EditExperienceScreen}
      options={{
        headerShown: true,
        title: "Add Your Experience",
        headerTitleStyle: {
          fontFamily: fonts.gbold,
          fontSize: 18,
          color: colors.medium,
        },
      }}
    />
    <Stack.Screen
      name="EditProjectScreen"
      component={EditProjectScreen}
      options={{
        headerShown: true,
        title: "Add Your Projects",
        headerTitleStyle: {
          fontFamily: fonts.gbold,
          fontSize: 18,
          color: colors.medium,
        },
      }}
    />
    <Stack.Screen
      name="EditAwardScreen"
      component={EditAwardScreen}
      options={{
        headerShown: true,
        title: "Add Your Awards",
        headerTitleStyle: {
          fontFamily: fonts.gbold,
          fontSize: 18,
          color: colors.medium,
        },
      }}
    />
    <Stack.Screen
  
      name="EditSummaryScreen"
      component={EditSummaryScreen}
      options={{
        headerShown: true,
        title: "Put your Summary",
        headerTitleStyle: {
          fontFamily: fonts.gbold,
          fontSize: 18,
          color: colors.medium,
        },
      }}
    />
  </Stack.Navigator>
);

export default ResumeNavigator;
