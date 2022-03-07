import theme from "Theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: theme.space.XL,
    backgroundColor: "#E5E5E5",
    position: "relative"
  },
  logoStyle: {
    alignSelf: "center",
    marginVertical: theme.space["2XL"],
  },
  title: {
    marginBottom: theme.space["2XL"],
  },
  btnForgotPassword: {
    alignSelf: "flex-end",
  },
  textForgotPassword: {
    fontSize: theme.fontSize.LG
  },
  btnContainer:{
    marginTop: theme.space["2XL"],
    maxHeight: theme.sizes.INPUT_HEIGHT + 5,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  btnLogin: {
    maxWidth: 100,
    minWidth: 100,
    maxHeight: theme.sizes.INPUT_HEIGHT,
    backgroundColor: theme.colors.green,
    borderWidth: 0
  },
  textBtnLogin: {
    fontWeight: "bold"
  },
  registerContainer: {
    flexDirection: "row",
    marginVertical: theme.space.XL
  },
  textSignUp: {
    color: theme.colors.green,
    marginLeft: 5
  },
  
});

export default styles;