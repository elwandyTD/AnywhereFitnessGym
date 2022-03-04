import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { RootStackParams } from "types/navigation";

import theme from "../theme";
import AnimatedView from "./Animated/AnimatedView";
import Tag from "./Tag";

const PartnerListItem = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  const onPress = () => {
    navigation.push("DetailPartnerScreen");
  }

  return (
    <AnimatedView 
      style={styles.container}
      scaleTo={0.97}
      onPress={onPress}
    >
      <View style={styles.imgContainer}>
        <Image 
          resizeMode="contain"
          source={require("../../assets/images/logo.png")}
          style={styles.imgStyle}
        />
      </View>
      <View style={styles.detailContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Anywhere Fitness Gymastic</Text>
          {/* <Text style={styles.tagType}>Anywhere</Text> */}
          {true && (
            <Tag 
              style={styles.tagType}
              containerStyle={styles.tagTypeContainer}
              text="Online" 
            />
          )}
        </View>
        <Text style={styles.subTitle}>Modern fitness space for hourly rental</Text>
        <View style={styles.tagsContainer}>
          <Tag text="Semi-private room" />
          <Tag text="fitness club" />
        </View>
      </View>
    </AnimatedView>
  );
}

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

export default React.memo(PartnerListItem);
