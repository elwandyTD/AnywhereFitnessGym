import { Dimensions } from "react-native";
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
  BANNER_HEIGHT: height / 3
}

const space = {
  SM: RFValue(5),
  MD: RFValue(10),
  LG: RFValue(15),
  XL: RFValue(20),
  "2XL": RFValue(40),
  "3XL": RFValue(60),
}

const colors = {
  gray: "#E8E8E8",
  darkGray: "#B3B3B3",
  green: "#006352",
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
  scaleTo: 0.8,
  duration: 50,
}

const theme = {
  animation,
  border,
  colors,
  rounded,
  sizes,
  space,
}

export default theme;