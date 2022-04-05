import theme from "App/global/theme";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: theme.colors.backgroundColorMain,
    borderRadius: theme.rounded.XL,
    padding: RFValue(10)
  },
  modalTitle: {
    fontSize: theme.fontSize["3XL"],
    fontWeight: "600",
    marginTop: RFValue(5)
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "flex-end",
  }
});

export default styles;