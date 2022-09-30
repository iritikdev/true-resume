import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import colors from "../config/colors";
import {
  Screen,
  ListItem,
  ListItemSeparator,
  Icon,
  AppText,
  Heading,
} from "../components";
import fonts from "../config/fonts";

const menuItems = [
  {
    title: "Your Basic Details",
    subtitle:
      "Make a great first impression by presenting yourself in few sentences.",
    icon: {
      name: "account",
      backgroundColor: colors.accent,
    },
    targetScreen: "EditBasicDetailScreen",
  },
  {
    title: "Education",
    subtitle:
      "Show off your primary education, college degrees & exchange semesters.",
    icon: {
      name: "bank",
      backgroundColor: colors.accent,
    },
    targetScreen: "EditEducationScreen",
  },
  {
    title: "Skills",
    subtitle: "List your technical, managerial or soft skills in this section.",
    icon: {
      name: "radar",
      backgroundColor: colors.accent,
    },
    targetScreen: "EditSkillScreen",
  },
  {
    title: "Experience",
    subtitle:
      "A place to highlight your professional experience - including internships.",
    icon: {
      name: "purse",
      backgroundColor: colors.accent,
    },
    targetScreen: "EditExperienceScreen",
  },
  {
    title: "Project",
    subtitle:
      "Worked on a particular challenging project in the past? Mention it here.",
    icon: {
      name: "folder-check",
      backgroundColor: colors.accent,
    },
    targetScreen: "SocialScreen",
  },

  // {
  //   title: "Awards",
  //   subtitle:
  //     "Awards like student competitions or industry accolades belong here.",
  //   icon: {
  //     name: "certificate",
  //     backgroundColor: colors.accent,
  //   },
  //   // targetScreen: routes.MESSAGES,
  // },
  // {
  //   title: "Publication",
  //   subtitle:
  //     "Academic publications or book releases have a dedicated place here.",
  //   icon: {
  //     name: "account-hard-hat",
  //     backgroundColor: colors.accent,
  //   },
  //   // targetScreen: routes.MESSAGES,
  // },
  // {
  //   title: "Courses",
  //   subtitle:
  //     "Did you complete MOOCs or an evening course? Show them off in this section.",
  //   icon: {
  //     name: "book-check",
  //     backgroundColor: colors.accent,
  //   },
  //   // targetScreen: routes.MESSAGES,
  // },
  // {
  //   title: "References",
  //   subtitle:
  //     "If you have former colleagues or bosses that vouch for you, list them.",
  //   icon: {
  //     name: "account-hard-hat",
  //     backgroundColor: colors.accent,
  //   },
  //   // targetScreen: routes.MESSAGES,
  // },
];

function AddResumeScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <Icon
          name={"eye"}
          style={styles.viewer}
          backgroundColor={colors.white}
          iconColor={colors.primary}
          size={50}
        />
        <FlatList
          ListHeaderComponent={
            <View
              style={{
                paddingHorizontal: 20,
                paddingBottom: 30,
                paddingTop: 20,
                backgroundColor: "#fff",
              }}
            >
              <Heading
                style={{
                  fontSize: 22,
                  fontFamily: fonts.semi,
                }}
              >
                Namaste! 🙏
              </Heading>
              <AppText>Let's build your resume</AppText>
            </View>
          }
          data={menuItems}
          showsVerticalScrollIndicator={false}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              card={true}
              chevron={true}
              title={item.title}
              subTitle={item?.subtitle}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                  iconColor={colors.danger}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 60,
  },
  screen: {
    backgroundColor: "colors.light",
    // marginBottom: 40,
  },
  viewer: {
    position: "absolute",
    bottom: 30,
    right: 30,
    zIndex: 50,
    elevation: 8,
    borderRadius: 50,
  },
});
export default AddResumeScreen;
