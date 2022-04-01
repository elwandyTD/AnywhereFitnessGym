import theme from "Theme";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  buttonSizeSM: {
    paddingVertical: RFValue(5),
    paddingHorizontal: RFValue(15),
  },
  buttonSizeMD: {
    paddingVertical: RFValue(8),
    paddingHorizontal: RFValue(20),
  },
  buttonSizeLG: {
    paddingVertical: RFValue(5),
    paddingHorizontal: RFValue(15),
  },
  button: {
    borderWidth: theme.border.WIDTH,
    borderRadius: theme.rounded.FULL,
  },
  container: {

  },
  default: {
    borderColor: theme.colors.black,
    backgroundColor: theme.colors.black
  },
  textDefault: {
    color: theme.colors.white
  },
  transparent: {
    borderColor: theme.colors.black,
    backgroundColor: "transparent"
  },
  textTransparent: {
    color: theme.colors.black
  },
  transparentActive: {
    backgroundColor: theme.colors.black
  },
  textTransparentActive: {
    color: theme.colors.white
  },
  primary: {
    borderColor: theme.colors.green,
    backgroundColor: theme.colors.green,
    // borderWidth: 0,
  },
  textPrimary: {
    color: theme.colors.white
  },
  
  textLg: {
    fontSize: RFValue(20)
  },
  textSm: {
    fontSize: RFValue(14)
  },
  textMd: {
    fontSize: RFValue(18)
  }
});

export default styles;