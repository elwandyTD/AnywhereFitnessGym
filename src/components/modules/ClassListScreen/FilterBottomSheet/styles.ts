import theme from "Theme";
import { StyleSheet, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";


const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  bottomsheetContainer: {
    padding: theme.space.XL,
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