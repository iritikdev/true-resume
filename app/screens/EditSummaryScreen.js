import { useRef, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  actions,
  RichEditor,
  RichToolbar,
} from "react-native-pell-rich-editor";

import colors from "../config/colors";
import { Screen } from "../components";

export default function EditSummaryScreen() {
  const richText = useRef();

  const [descHTML, setDescHTML] = useState("");
  const [showDescError, setShowDescError] = useState(false);

  const richTextHandle = (descriptionText) => {
    if (descriptionText) {
      setShowDescError(false);
      setDescHTML(descriptionText);
    } else {
      setShowDescError(true);
      setDescHTML("");
    }
  };

  const submitContentHandle = () => {
    const replaceHTML = descHTML.replace(/<(.|\n)*?>/g, "").trim();
    const replaceWhiteSpace = replaceHTML.replace(/&nbsp;/g, "").trim();

    if (replaceWhiteSpace.length <= 0) {
      setShowDescError(true);
    } else {
      // send data to your server!
    }
  };

  return (
    <Screen edges={["bottom", "left", "right"]} style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* <Pressable onPress={() => richText.current?.dismissKeyboard()}>
          <Text style={styles.headerStyle}>Your awesome Content</Text>
          <View style={styles.htmlBoxStyle}>
            <Text>{descHTML}</Text>
          </View>
        </Pressable> */}
        <View style={styles.richTextContainer}>
          <ScrollView>
            <RichEditor
              placeholder="Write your cool content here :)"
              ref={richText}
              onChange={richTextHandle}
              androidHardwareAccelerationDisabled={true}
              style={styles.richTextEditorStyle}
              initialHeight={200}
            />
          </ScrollView>
          <RichToolbar
            editor={richText}
            selectedIconTint="#873c1e"
            iconTint="#312921"
            actions={[
              actions.setBold,
              actions.setItalic,
              actions.insertBulletsList,
              actions.insertOrderedList,
              actions.insertLink,
              actions.setStrikethrough,
              actions.setUnderline,
            ]}
            style={styles.richTextToolbarStyle}
          />
        </View>
        {showDescError && (
          <Text style={styles.errorTextStyle}>
            Your content shouldn't be empty 🤔
          </Text>
        )}

        {/* <TouchableOpacity
          style={styles.saveButtonStyle}
          onPress={submitContentHandle}>
          <Text style={styles.textButtonStyle}>Save</Text>
        </TouchableOpacity> */}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    padding: 20,
    alignItems: "center",
  },

  headerStyle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#312921",
    marginBottom: 10,
  },

  htmlBoxStyle: {
    height: 200,
    width: 330,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
  },

  richTextContainer: {
    backgroundColor: colors.light,
    display: "flex",
    flexDirection: "column-reverse",
    width: "100%",
    padding: 10,
    borderRadius: 5,
  },

  richTextEditorStyle: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    elevation: 10,
    fontSize: 20,
  },

  richTextToolbarStyle: {
    backgroundColor: colors.light,
  },

  errorTextStyle: {
    color: "#FF0000",
    marginBottom: 10,
  },
});
