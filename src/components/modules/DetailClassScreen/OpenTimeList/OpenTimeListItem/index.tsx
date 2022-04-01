import React from "react";
import { Text, View } from "react-native";
import Animated, { FadeInDown, FadeInLeft, FadeOut, FadeOutLeft, Layout } from "react-native-reanimated";

import styles from "./styles";
import { capitalizeFirstLetter } from "App/utils/format";

type OpenTimeListItemProps = {
  days: string;
  startHours: string;
  endHours: string;
  index: number;
}

const OpenTimeListItem = ({ days, endHours, startHours, index }: OpenTimeListItemProps) => {

  return (
    <Animated.View 
      style={styles.container}
      layout={Layout.springify()}
      entering={FadeInDown.delay(150 * index)}
      exiting={FadeOut.delay(150 * index)}
    >
      <Text style={[styles.textStyle, styles.textDayStyle]}>{capitalizeFirstLetter(days)}</Text>
      <Text style={[styles.textStyle, styles.textTimeStyle]}>{startHours} - {endHours}</Text>
    </Animated.View>
  );
}

export default React.memo(OpenTimeListItem);