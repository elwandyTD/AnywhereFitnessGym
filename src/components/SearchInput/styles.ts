import { StyleSheet } from "react-native";
import theme from "App/global/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: theme.sizes.INPUT_HEIGHT,
    borderRadius: theme.sizes.INPUT_HEIGHT,
    borderWidth: theme.border.WIDTH,
    borderColor: theme.border.COLOR,
    paddingHorizontal: theme.space.LG,
    paddingVertical: 0,
    fontSize: theme.sizes.INPUT_FONT_SIZE
  }
});

export default styles;