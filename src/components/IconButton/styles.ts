import theme from "Theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  buttonContainer: {
    maxWidth: theme.sizes.ICON_BUTTON_SIZE,
    minWidth: theme.sizes.ICON_BUTTON_SIZE,
    height: theme.sizes.ICON_BUTTON_SIZE,
    borderWidth: theme.border.WIDTH,
    borderColor: theme.border.COLOR,
    borderRadius: theme.rounded.FULL,
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default styles;