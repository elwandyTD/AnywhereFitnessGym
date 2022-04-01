import theme from "Theme";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
  },
  textStyle: {
    color: theme.colors.black
  },
  textDayStyle: {
    width: 80
  },
  textTimeStyle: {
    marginLeft: 5
  },
});

export default styles;