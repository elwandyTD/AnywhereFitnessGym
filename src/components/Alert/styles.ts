import theme from "App/global/theme";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: theme.colors.white,
    borderRadius: RFValue(15),
    paddingVertical: RFValue(15),
    paddingHorizontal: RFValue(20),
    textAlign: "center"
  },
  button: {
    width: RFValue(80),
    alignSelf: "center",
  },
  textButton: {
    textAlign: "center",
    fontWeight: "bold"
  },
  lottie: {
    height: RFValue(160),
    alignSelf: "center"
  },
  message: {
    alignSelf: "center",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: RFValue(15),
    fontSize: theme.fontSize.XL
  }
});

export default styles;