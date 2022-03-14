import theme from "Theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: theme.sizes.VIEWICON_SIZE,
    height: theme.sizes.VIEWICON_SIZE,
    borderColor: theme.colors.black,
    borderWidth: theme.border.WIDTH,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.rounded.LG
  },
  textStyle: {
    color: theme.colors.black,
    fontSize: theme.fontSize.MD
  }
});

export default styles;