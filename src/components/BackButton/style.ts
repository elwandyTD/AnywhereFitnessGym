import theme from "Theme";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  buttonStyle: {
    width: RFValue(100),
    height: RFValue(45),
    borderWidth: 1.5,
    borderRadius: RFValue(40),
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.black,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  iconStyle: {
    color: theme.colors.black
  },
  textStyle: {
    color: theme.colors.black,
    fontSize: theme.fontSize.MD,
    marginLeft: RFValue(8)
  }
});

export default styles;