import { Dimensions, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const height = Dimensions.get("window").height;

const fontSize = {
  XS: RFValue(10),
  SM: RFValue(12),
  MD: RFValue(14),
  LG: RFValue(16),
  XL: RFValue(18),
  "2XL": RFValue(20),
  "3XL": RFValue(22),
  "4XL": RFValue(24),
}

const sizes = {
  INPUT_HEIGHT: RFValue(38),
  INPUT_FONT_SIZE: fontSize.MD,

  ICON_BUTTON_SIZE: RFValue(40),
  ICON_SIZE: RFValue(22),

  BUTTON_WIDTH: RFValue(40),
  BUTTON_HEIGHT: RFValue(35),
  BANNER_HEIGHT: height / 3,

  PARTNER_LIST_ITEM_IMAGE_HEIGHT: RFValue(80),
  PARTNER_LIST_ITEM_IMAGE_WIDTH: RFValue(80),
  PARTNER_LIST_ITEM_BORDER_BOTTOM_WIDTH: 2,

  TAG_HEIGHT: RFValue(30),

  VIEWICON_SIZE: RFValue(80),
}

const space = {
  XS: RFValue(3),
  SM: RFValue(5),
  MD: RFValue(10),
  LG: RFValue(15),
  XL: RFValue(20),
  "2XL": RFValue(40),
  "3XL": RFValue(60),
}

const colors = {
  black: "#000",
  darkGray: "#B3B3B3",
  gray: "#E8E8E8",
  green: "#006352",
  white: "#FFF",
  backgroundColorMain: "#F0F0F0",
  backgroundColorSecondary: "#999"
}

const rounded = {
  SM: 5,
  MD: 10,
  LG: 15,
  XL: 20,
  "2XL": 25,
  FULL: 100
}

const border = {
  WIDTH: 1,
  COLOR: colors.darkGray
}

const animation = {
  scaleTo: 0.87,
  duration: 50,
}

const styles = StyleSheet.create({
  flexCentered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textSubtitle: {
    fontSize: fontSize.MD,
    color: colors.black,
  },
  textTitle: {
    fontSize: fontSize["2XL"],
    color: colors.black,
  },
  borderRounded: {
    borderWidth: border.WIDTH,
    borderColor: border.COLOR,
    borderRadius: rounded.FULL
  },
  logoStyle: {
    maxHeight: RFValue(50),
    width: RFValue(160)
  },
  safeAreaView: {
    flex: 1,
  },
  keyboardAvoidingView: {
    flex: 1
  },
  flexRow: {
    flexDirection: "row"
  },
  btnContainer:{
    marginTop: space["2XL"],
    maxHeight: sizes.INPUT_HEIGHT + 5,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  btnLogin: {
    maxWidth: 100,
    minWidth: 100,
    maxHeight: sizes.INPUT_HEIGHT,
    backgroundColor: colors.green,
    borderWidth: 0
  },
  textBtnLogin: {
    fontWeight: "bold"
  },
  roundedBgPrimary: {
    borderRadius: rounded.FULL,
    backgroundColor: colors.green
  },
  roundedBgTransparent: {
    borderRadius: rounded.FULL,
    backgroundColor: "transparent"
  },
  roundedBgDefault: {
    borderRadius: rounded.FULL,
    backgroundColor: colors.darkGray
  },
});

const theme = {
  animation,
  border,
  colors,
  fontSize,
  rounded,
  sizes,
  space,
  styles,
}

export default theme;