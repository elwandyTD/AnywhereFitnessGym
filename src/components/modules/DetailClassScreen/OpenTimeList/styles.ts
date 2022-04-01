import theme from "App/global/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "relative"
  },
  btnArrow: {
    // backgroundColor: "red",
    position: "absolute",
    right: -25,
    bottom: 0,
    padding: 3
  },
  iconArrow: {
    color: theme.colors.black,
    fontSize: 15,
  }
});

export default styles;