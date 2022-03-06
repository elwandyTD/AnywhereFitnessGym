import theme from "Theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: theme.space.LG,
    borderBottomWidth: theme.sizes.PARTNER_LIST_ITEM_BORDER_BOTTOM_WIDTH,
    borderBottomColor: theme.border.COLOR
  },
  imgContainer: {
    maxWidth: theme.sizes.PARTNER_LIST_ITEM_IMAGE_WIDTH,
    minWidth: theme.sizes.PARTNER_LIST_ITEM_IMAGE_WIDTH,
    height: theme.sizes.PARTNER_LIST_ITEM_IMAGE_HEIGHT,
    minHeight: theme.sizes.PARTNER_LIST_ITEM_IMAGE_HEIGHT,
    borderWidth: theme.border.WIDTH,
    borderColor: theme.border.COLOR,
    ...theme.styles.flexCentered,
  },
  imgStyle: {
    width: "100%",
    height: theme.sizes.PARTNER_LIST_ITEM_IMAGE_HEIGHT,
  },
  detailContainer: {
    marginLeft: theme.space.MD,
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    flexDirection: "row",
  },
  title: {
    color: theme.colors.black,
    fontSize: theme.fontSize.XL,
    flex: 1,
  },
  tagTypeContainer: {
    marginLeft: theme.space.SM
  },
  tagType: {
    backgroundColor: theme.colors.green,
    borderColor: theme.colors.green,
    color: theme.colors.white
  },
  subTitle: {
    color: theme.colors.darkGray,
    fontSize: theme.fontSize.MD
  },
  tagsContainer: {
    marginTop: theme.space.SM
  }
});

export default styles;