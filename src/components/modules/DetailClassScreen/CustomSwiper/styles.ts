import theme from "Theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  carouselContainer:{
    height: theme.sizes.BANNER_HEIGHT,
  },
  dotStyle: {
    backgroundColor: 'rgba(255, 255, 255, .3)',
    width: 5,
    height: 5,
    borderRadius: 4,
    margin: 3
  },
  paginationStyle: {
    backgroundColor: "rgba(0, 0, 0, .7)", 
    bottom: 0,
    width: "100%", 
    height: theme.sizes.BANNER_HEIGHT / 10
  },
});

export default styles;