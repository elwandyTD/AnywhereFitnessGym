import theme from "App/global/theme";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  bottomsheetContainer: {
    paddingHorizontal: theme.space.XL,
    position: "relative",
    paddingVertical: theme.space.LG
  },
  textHeader: {
    alignSelf: "center",
    fontSize: theme.fontSize["4XL"],
    fontWeight: "bold",
    color: theme.colors.black,
    marginBottom: RFValue(15),
  },
  textHeaderBottomsheet: {
    marginVertical: RFValue(15),
    fontSize: theme.fontSize.XL,
    color: theme.colors.black,
    fontWeight: "bold"
  },
  packageList: {
    minHeight: theme.sizes.BUTTON_HEIGHT,
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: theme.space.XL
  },
  package: {
    marginRight: RFValue(10),
    marginBottom: RFValue(10),
  },
  rightInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: RFValue(5)
  },
  textTitleRightInput: {
    minWidth: RFValue(60),
    fontSize: theme.fontSize.XL,
    color: theme.colors.black,
    fontWeight: "bold"
  },
  textField: {
    marginLeft: RFValue(15),
    flex: 1
  },
  priceContainer: {
    flex: 1,
    paddingVertical: RFValue(5),
    paddingHorizontal: RFValue(15),
    backgroundColor: theme.colors.backgroundColorMain,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 100,
    minHeight: 40,
    marginTop: RFValue(15)
  },
  priceText: {
    fontSize: theme.fontSize.LG,
    color: theme.colors.black
  }
});

export default styles;