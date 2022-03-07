import theme from "Theme";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.space.XL,
    backgroundColor: "#E5E5E5",
    flexGrow: 1,
  },
  logoStyle: {
    alignSelf: "center",
    marginVertical: theme.space["2XL"],
  },
  title: {
    marginBottom: theme.space.MD,
  },
  containerProfileImg: {
    width: RFValue(90),
    height: RFValue(75),
    alignSelf: "center",
    marginBottom: theme.space.MD
  },
  profileImgText: {
    fontSize: theme.fontSize.MD,
    color: theme.colors.black,
    textAlign: "center",
    marginTop: theme.space.SM,
    fontWeight: "700",
  },
  profileImg: {
    width: RFValue(50),
    height: RFValue(50),
    alignSelf: "center"
  },
  label: {
    fontSize: theme.fontSize.LG,
    marginBottom: 2,
    fontWeight: "700",
    color: theme.colors.black
  },

  inputLeft: {
    flex: 1, 
    marginRight: RFValue(10)
  },
  inputRight: {
    flex: 1, 
    marginLeft: RFValue(10)
  },

  btnContainer: {
    marginTop: theme.space.LG
  }
});

export default styles;