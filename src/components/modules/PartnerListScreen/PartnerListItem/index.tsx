import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./styles";
import AnimatedView from "Components/Animated/AnimatedView";
import Tag from "Components/Tag";

const PartnerListItem = () => {
  const navigation = useNavigation<StackNavigationProp<ReactNavigation.RootStackParamList>>();

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
          source={require("../../../../assets/images/logo.png")}
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

export default React.memo(PartnerListItem);
