import theme from "App/global/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  day: {
    color: theme.colors.black,
    fontSize: theme.fontSize.LG
  },
  dayActive: {
    backgroundColor: theme.colors.green,
    color: theme.colors.white
  },
  dayDisabled: {
    color: theme.colors.backgroundColorMain
  },
});

export default styles;