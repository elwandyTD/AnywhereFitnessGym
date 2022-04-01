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
    // minHeight: RFValue(70),
    padding: RFValue(10),
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
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

    bottom: 0,
    width: "100%", 
    height: theme.sizes.BANNER_HEIGHT / 10
  },
  detailContainer: {
    paddingHorizontal: RFValue(20),
    paddingVertical: RFValue(15),
    backgroundColor: theme.colors.white,
  },
  textTitle: {
    color: theme.colors.black,
    fontSize: theme.fontSize["3XL"],
    fontWeight: "bold",
  },
  logoImgStyle: {
    maxHeight: RFValue(60),
    maxWidth: RFValue(200),
    marginBottom: 30,
    alignSelf: "center"
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

  textMaps: {
    color: theme.colors.black,
    fontSize: theme.fontSize.XL,
    fontWeight: "bold",
    marginLeft: RFValue(20),
    marginBottom: RFValue(10),
  },
  mapContainer: {
    flex: 1,
    paddingBottom: RFValue(40),
    backgroundColor: theme.colors.white,
  },
  mapStyle: {
    height: theme.sizes.BANNER_HEIGHT,
    elevation: 10,
  },

  bookingButtonContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    minHeight: RFValue(60),
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
  package: {
    marginRight: RFValue(10),
    marginBottom: RFValue(10),
  },
  packageButton: {
    minHeight: theme.sizes.BUTTON_HEIGHT,
    marginRight: 10,
    marginVertical: 5,
    borderColor: theme.border.COLOR,
    borderWidth: theme.border.WIDTH,
  },
  textHeaderBottomsheet: {
    marginVertical: RFValue(15),
    fontSize: theme.fontSize.XL,
    color: theme.colors.black,
    fontWeight: "bold"
  },
  rightInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: RFValue(5)
  },
  textField: {
    marginLeft: RFValue(15),
    flex: 1
  },
  textTitleRightInput: {
    minWidth: RFValue(60),
    fontSize: theme.fontSize.XL,
    color: theme.colors.black,
    fontWeight: "bold"
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