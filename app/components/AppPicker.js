import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  FlatList,
  Dimensions,
  Button,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import fonts from "../config/fonts";
import AppText from "./AppText";
import PickerItem from "./PickerItem";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

function AppPicker({
  placeholder,
  items,
  icon,
  onSelectItem,
  selectedItem,
  width = "100%",
}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.medium}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <MaterialCommunityIcons
            name={"chevron-down"}
            size={24}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalView}>
          <View style={styles.line}></View>
          <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
            <View style={styles.close}>
              <MaterialCommunityIcons name="close" size={20} />
            </View>
          </TouchableWithoutFeedback>
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  modalView: {
    width: "100%",
    backgroundColor: colors.white,
    height: SCREEN_HEIGHT,
    position: "absolute",
    top: 500,
    borderRadius: 25,
  },
  line: {
    width: 75,
    backgroundColor: "gray",
    height: 4,
    borderRadius: 10,
    alignSelf: "center",
    marginVertical: 15,
  },
  close: {
    backgroundColor: colors.light,
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 20,
    top: 20,
  },
  container: {
    // elevation: 1,
    backgroundColor: colors.white,
    borderRadius: 10,
    flexDirection: "row",
    padding: 15,
    marginVertical: 8,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
    width: "100%",
    fontFamily: fonts.regular,
    color: colors.medium,
  },
});

export default AppPicker;
