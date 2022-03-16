import theme from "Theme";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  buttonStyle: {
    width: RFValue(40),
    height: RFValue(40),
    borderWidth: 1.5,
    borderRadius: RFValue(40),
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.backgroundColorSecondary,
    justifyContent: "center",
    alignItems: "center"
  },
  iconStyle: {
    color: theme.colors.backgroundColorSecondary
  }
});

export default styles;