import theme from "Theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  buttonContainer: {
    alignSelf: "flex-start",
    marginBottom: theme.space.XS,

  },
  textStyle: {
    paddingHorizontal: theme.space.MD,
    paddingVertical: theme.space.XS,
    fontSize: theme.fontSize.XS,
    width: "auto",
    color: theme.colors.darkGray,
    ...theme.styles.borderRounded
  },
});

export default styles;