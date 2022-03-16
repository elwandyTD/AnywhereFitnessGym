import theme from "App/global/theme";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    borderRadius: 100,
    marginBottom: RFValue(5)
  },
  button: {
    paddingVertical: RFValue(5),
    paddingHorizontal: RFValue(10),
    overflow: "hidden",
    borderRadius: 100
  },
  text: {
    fontWeight: "600",
  },

  bgActive: {
    backgroundColor: theme.colors.green,
  },
  textActive: {
    color: theme.colors.white
  },

  textDisabled: {
    color: theme.colors.darkGray,
  }
});

export default styles;