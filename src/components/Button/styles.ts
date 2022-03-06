import theme from "Theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: theme.space.LG,
    minWidth: theme.sizes.BUTTON_WIDTH,
    height: theme.sizes.BUTTON_HEIGHT,
    borderWidth: theme.border.WIDTH,
    borderColor: theme.border.COLOR,
    borderRadius: theme.rounded.FULL,
    backgroundColor: theme.border.COLOR,
    ...theme.styles.flexCentered
  },
  textStyle: {
    color: "#FFF"
  }
});

export default styles;