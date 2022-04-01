import theme from "Theme";
import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "relative"
  },
  imgStyle: {
    height: theme.sizes.BANNER_HEIGHT,
    width: undefined,
    position: "relative"
    // justifyContent: "center",
    // alignItems: "center",
  },
  text: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "rgba(0, 0, 0, .9)",
    fontSize: theme.fontSize.LG,
    color: theme.colors.white,
    position: "absolute",
    top: 10,
    left: 10
  }
});

export default styles;