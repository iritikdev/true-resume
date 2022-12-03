import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// import Swipeable from "react-native-gesture-handler/Swipeable";

// import Text from "../Text";
import colors from "../config/colors";
import fonts from "../config/fonts";

import ListContentItem from "./ListContentItem";
function ListItem({
  title,
  titleColor,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
  chevron,
  card,
  style
}) {
  return (
    // <Swipeable renderRightActions={renderRightActions}>
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <View style={[styles.container, style]}>
        {IconComponent && IconComponent}
        {image && <Image style={styles.image} source={image} />}
        <View
          style={[
            styles.detailsContainer,
            { marginLeft: image || IconComponent ? 15 : 0 },
          ]}
        >
          <Text style={[styles.title,{color:titleColor}]} numberOfLines={1}>
            {title}
          </Text>
          {subTitle && (
            <Text style={styles.subTitle} numberOfLines={2}>
              {subTitle}
            </Text>
          )}
          {/* {card && <ListContentItem />} */}
        </View>
        {chevron && (
          <MaterialCommunityIcons
            color={colors["white-7"]}
            name="chevron-right"
            size={25}
          />
        )}
      </View>
    </TouchableHighlight>
    // </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  subTitle: {
    color: "#8c8c8c",
    fontFamily: fonts.regular,
    fontSize: 13,
  },
  title: {
    color: "#4d4d4d",
    fontFamily: fonts.glight,
    fontSize: 16,
  },
});

export default ListItem;
