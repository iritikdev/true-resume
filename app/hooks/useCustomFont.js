import { useFonts } from "expo-font";

const useCustomFont = () => {
  const [loaded] = useFonts({
    "Inter-Light": require("../assets/fonts/Inter-Light.ttf"),
    "Inter-Regular": require("../assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("../assets/fonts/Inter-Bold.ttf"),
    "Inter-SemiBold": require("../assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Medium": require("../assets/fonts/Inter-Medium.ttf"),
    "Gilroy-ExtraBold": require("../assets/fonts/Gilroy-ExtraBold.ttf"),
    "Gilroy-Light": require("../assets/fonts/Gilroy-Light.ttf"),
  });
  return loaded;
};

export default useCustomFont;
