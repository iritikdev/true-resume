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
  Button,
} from "../components";
import fonts from "../config/fonts";
import AppButton from "../components/Button";

const menuItems = [
  {
    title: "Sender Details",
    subtitle:
      "Make a great first impression by presenting yourself in few sentences.",
    icon: {
      name: "account",
      backgroundColor: colors.accent,
    },
    // targetScreen: "BasicDetailScreen",
  },
  {
    title: "Recipient Details",
    subtitle:
      "Show off your primary education, college degrees & exchange semesters.",
    icon: {
      name: "bank",
      backgroundColor: colors.accent,
    },
    targetScreen: "EditEducationScreen",
  },
  {
    title: "Letter Content",
    subtitle: "List your technical, managerial or soft skills in this section.",
    icon: {
      name: "radar",
      backgroundColor: colors.accent,
    },
    targetScreen: "EditSkillScreen",
  },
];

function LetterScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={
            <View
              style={{
                paddingHorizontal: 15,
                // paddingBottom: 10,
                paddingTop: 20,
                backgroundColor: "#fff",
              }}
            >
              <Heading
                style={{
                  fontFamily: fonts.gbold,
                  fontSize: 22,
                  color:colors.coaldark
                }}
              >
                Letter according to your needs
              </Heading>
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
                  iconColor={colors.primary}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
        <View style={{ paddingHorizontal: 10 }}>
          <Button title={"View Letter"} />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 60,
  },
  screen: {
    backgroundColor: "colors.light",
    // marginBottom: 40,
  },
});
export default LetterScreen;
