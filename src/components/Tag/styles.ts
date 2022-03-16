import theme from "Theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  buttonContainer: {
    alignSelf: "flex-start",
    marginBottom: theme.space.XS,
  },
  textContainer: {
    alignSelf: "flex-start",
    ...theme.styles.borderRounded,
  },
  textStyle: {
    paddingHorizontal: theme.space.MD,
    paddingVertical: theme.space.XS,
    fontSize: theme.fontSize.XS,
    width: "auto",
    color: theme.colors.darkGray,
    ...theme.styles.borderRounded
  },
  default: {
    backgroundColor: "transparent",
    color: theme.colors.black,
    borderColor: theme.colors.black,
  },
  secondary: {
    backgroundColor: theme.colors.backgroundColorMain,
    color: theme.colors.black,
    borderColor: theme.colors.backgroundColorMain,
  },
  sm: {
    paddingHorizontal: theme.space.SM,
    paddingVertical: theme.space.XS,
    fontSize: theme.fontSize.XS,
  },
  md: {
    paddingHorizontal: theme.space.MD,
    paddingVertical: theme.space.XS,
    fontSize: theme.fontSize.SM,
  },
  lg: {
    paddingHorizontal: theme.space.MD,
    paddingVertical: theme.space.XS,
    fontSize: theme.fontSize.XS,
  }
});

export default styles;