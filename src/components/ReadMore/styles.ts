import theme from "Theme";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.backgroundColorSecondary
  },
  contentContainer: {
    overflow: "hidden"
  },
  btnReadMoreContainer: {
    position: "absolute",
    paddingTop: 40,
    paddingBottom: RFValue(15),

    bottom: 0,
    left: 0,
    right: 0
  },
  btnReadMore: {
    alignSelf: "flex-start",
    elevation: 10
  },
  textBtnReadMore: {
    color: theme.colors.black,
    fontWeight: "bold",
  }
});

export default styles;