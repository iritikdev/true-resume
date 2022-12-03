import React, { useRef } from "react";
import { StyleSheet, View, FlatList, Animated } from "react-native";


import menu from "../config/menu";
import colors from "../config/colors";
import { Screen, ListItem, ListItemSeparator, Icon,DynamicHeader } from "../components";



function AddResumeScreen({ navigation }) {
  let scrollOffsetY = useRef(new Animated.Value(0)).current;
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <Icon
          name={"eye"}
          style={styles.viewer}
          backgroundColor={colors.primary}
          iconColor={colors.white}
          size={50}
        />
        <DynamicHeader animHeaderValue={scrollOffsetY} />
        <View
          style={{
            flex: 1,
            backgroundColor: colors.white,
            paddingTop: 30,
            borderTopRightRadius: 17,
            borderTopLeftRadius: 17,
          }}
        >
          <View style={styles.centerBar}></View>

          <FlatList
            style={{
              flex: 1,
              borderTopEndRadius: 25,
              borderTopRightRadius: 30,
              padingBottom: 50,
            }}
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
              { useNativeDriver: false }
            )}
            data={menu}
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
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 60,
  },
  centerBar: {
    backgroundColor: colors.medium,
    width: 70,
    height: 6,
    borderRadius: 10,
    position: "absolute",
    top: 5,
    left: 160,
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
