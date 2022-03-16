import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { View, Text, Image } from "react-native";

import styles from "./styles";
import ImageAsset from "Assets/images";
import ScalingPressable from "Components/Animated/ScalingPressable";
import Tag from "Components/Tag";
import { ClassListModel } from "Types/class";

type PartnerListItemProps = {
  item: ClassListModel;
  index: number;
}

const PartnerListItem = ({ item, index = 0 }: PartnerListItemProps) => {
  const navigation = useNavigation<StackNavigationProp<ReactNavigation.RootStackParamList>>();

  const onPress = () => {
    navigation.push("DetailClassScreen", { item });
  }

  return (
    <ScalingPressable 
      style={styles.container}
      scaleTo={0.97}
      onPress={onPress}
      useAnimatedLayout={true}
      index={index}
    >
      <View style={styles.imgContainer}>
        <Image 
          resizeMode="contain"
          source={ImageAsset.Logo}
          style={styles.imgStyle}
        />
      </View>
      <View style={styles.detailContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.content.title}</Text>
        </View>
        <View style={styles.tagsContainer}>
          <Tag type="secondary" marginBottom={5} text={item.types_name} />
          <Tag text={item.category_name} />
        </View>
      </View>
    </ScalingPressable>
  );
}

export default React.memo(PartnerListItem);
