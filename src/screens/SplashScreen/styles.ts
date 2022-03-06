import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import theme from "Theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: theme.space["3XL"]
  },
  sharedElementContainer: {
    width: "100%"
  },
  logoImgStyle: {
    height: RFValue(120),
    width: "100%"
  }
});

export default styles;