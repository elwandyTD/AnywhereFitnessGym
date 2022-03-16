import theme from "Theme";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  backButton: {
    position: "absolute",
    top: RFValue(15),
    left: RFValue(15)
  },
  container: {
    backgroundColor: theme.colors.backgroundColorMain
  },
  carouselContainer:{
    height: theme.sizes.BANNER_HEIGHT,
  },
  carouselImgStyle: {
    height: theme.sizes.BANNER_HEIGHT,
    width: undefined
  },
  dotStyle: {
    backgroundColor: 'rgba(255, 255, 255, .3)',
    width: 5,
    height: 5,
    borderRadius: 4,
    margin: 3
  },
  logoContainer: {
    minHeight: RFValue(70),
    padding: RFValue(10),
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    position: "relative",
  },
  iconsContainer: {
    padding: RFValue(20),
    flexDirection: "row"  
  },
  iconStyle: {
    marginRight: RFValue(15)
  },
  paginationStyle: {
    backgroundColor: "rgba(0, 0, 0, .4)", 
    // backgroundColor: "rgba(255, 255, 255, .4)", 
    bottom: 0,
    width: "100%", 
    height: theme.sizes.BANNER_HEIGHT / 10
  },
  detailContainer: {
    paddingHorizontal: RFValue(20),
    backgroundColor: theme.colors.white,
  },
  logoImgStyle: {
    maxHeight: RFValue(50),
    maxWidth: RFValue(160),
    flex: 1,
  },
  tagContainer: {
    paddingVertical: RFValue(10),
  },
  showAllBtn: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.black,
    alignSelf: "flex-start",
    color: theme.colors.black
  },

  detailList: {
    marginTop: RFValue(25),
  },
  detailListItem: {
    flex: 1,
    flexDirection: "row",
    marginBottom: RFValue(8),
  },
  detailIconStyle: {
    marginRight: RFValue(15),
    minWidth: RFValue(25),
    alignSelf: "center",
    color: theme.colors.black,
    textAlign: "center"
  },
  detailTextStyle: {
    flex: 1,
    color: theme.colors.black
  },

  mapContainer: {
    flex: 1,
    marginTop: -RFValue(160),
    marginBottom: RFValue(80),
  },
  mapStyle: {
    height: theme.sizes.BANNER_HEIGHT
  },

  bookingButtonContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    minHeight: RFValue(60),
    // borderTopWidth: theme.border.WIDTH,
    // borderColor: theme.border.COLOR,
    backgroundColor: theme.colors.white,
    padding: RFValue(15),
    paddingVertical: RFValue(20),
    elevation: 10
  },
  bookingButton: {
    backgroundColor: theme.colors.green,
    borderWidth: 0,
    minHeight: 35,
  },

  bottomsheetContainer: {
    paddingHorizontal: theme.space.XL,
    position: "relative",
    paddingVertical: theme.space.LG
  },
  packageSection: {
    flex: 1,
    backgroundColor: "red"
  },
  packageList: {
    minHeight: theme.sizes.BUTTON_HEIGHT,
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: theme.space.XL
  },
  packageButton: {
    minHeight: theme.sizes.BUTTON_HEIGHT,
    marginRight: 10,
    marginVertical: 5,
    borderColor: theme.border.COLOR,
    borderWidth: theme.border.WIDTH,
  },
  rightInput: {

  }
});

export default styles;