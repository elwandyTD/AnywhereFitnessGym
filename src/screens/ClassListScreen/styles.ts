import theme from "Theme";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    backgroundColor: theme.colors.backgroundColorMain
  },
  bannerContainer: {
    flex: 1,
    position: "relative"
  },
  bannerImgStyle: {
    height: theme.sizes.BANNER_HEIGHT,
    width: undefined
  },
  logoContainer: {
    position: "absolute",
    top: RFValue(40),
    left: RFValue(15)
  },
  logoImgStyle: {
    maxHeight: RFValue(50),
    width: RFValue(160)
  },
  filterContainer: {
    flex: 1,
    paddingVertical: theme.space.LG,
    paddingHorizontal: theme.space.XL,
    flexDirection: "row",
    alignItems: "center"
  },
  textInformation: {
    fontSize: theme.fontSize["3XL"],
    color: theme.colors.black,
    marginBottom: theme.space.SM
  },
  classListContainer: {
    flex: 1,
    paddingHorizontal: theme.space.XL,
    paddingBottom: theme.space["2XL"]
  },

});

export default styles;