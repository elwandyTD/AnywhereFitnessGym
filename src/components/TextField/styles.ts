import theme from "Theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginBottom: theme.space.SM
  },
  label: {
    fontSize: theme.fontSize.LG,
    marginBottom: 5,
    fontWeight: "700"
  },
  inputContainer: {
    position: "relative",
  },
  input: {
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.gray,
    height: theme.sizes.INPUT_HEIGHT,
    borderRadius: theme.rounded.SM,
    paddingHorizontal: theme.space.LG,
    paddingVertical: 0,
    fontSize: theme.sizes.INPUT_FONT_SIZE,
  },
  inputPassword: {
    paddingRight: theme.sizes.INPUT_HEIGHT + 5
  },
  passwordIcon: {
    position: "absolute",
    color: theme.colors.gray,
    right: 15,
    top: theme.sizes.INPUT_HEIGHT / 4,
    fontSize: theme.fontSize.XL
  }
});

export default styles;