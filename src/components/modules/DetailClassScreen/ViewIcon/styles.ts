import theme from "Theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: theme.sizes.VIEWICON_SIZE,
    height: theme.sizes.VIEWICON_SIZE,
    alignItems: "center",
    borderWidth: 2,
    justifyContent: "center",
    borderRadius: theme.rounded.LG,
    elevation: 10,
  },
  buttonDefault: {
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.white,
  },
  buttonActive: {
    backgroundColor: theme.colors.backgroundColorSecondary,
    borderColor: theme.colors.white,
    borderWidth: 2,
  },
  textDefault: {
    color: theme.colors.black,
    fontSize: theme.fontSize.MD
  },
  textActive: {
    color: theme.colors.white,
    fontSize: theme.fontSize.MD
  },
});

export default styles;