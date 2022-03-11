import theme from "Theme";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    backgroundColor: theme.colors.white
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

  bottomsheetContainer: {
    paddingVertical: theme.space["XL"],
    paddingHorizontal: theme.space.XL,
  },
  filterTitle: {
    alignSelf: "center",
    borderWidth: theme.border.WIDTH,
    borderColor: theme.border.COLOR,
    backgroundColor: theme.colors.darkGray,
    color: theme.colors.white,
    fontSize: theme.fontSize["3XL"],
    borderRadius: theme.rounded.FULL,
    paddingHorizontal: theme.space.XL,
    paddingVertical: theme.space.XS,
  },
  programSection: {
    paddingVertical: 15,
  },
  programList: {
    borderColor: theme.border.COLOR,
    borderWidth: theme.border.WIDTH,
    flexDirection: "row",
    borderRadius: theme.rounded.FULL,
    minHeight: theme.sizes.BUTTON_HEIGHT,
    maxHeight: theme.sizes.BUTTON_HEIGHT,
    alignSelf: 'flex-start',
    marginTop: 5
  },
  programButton: {
    borderWidth: 0,
  },
  classSection: {
    paddingVertical: 15,
  },
  classList: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  classButton: {
    marginRight: 5,
    marginTop: 5,
  },
  buttonsSection: {
    flexDirection: "row",
    justifyContent: "center",
    width,
    position: "absolute",
    bottom: RFValue(145)
  },
});

export default styles;