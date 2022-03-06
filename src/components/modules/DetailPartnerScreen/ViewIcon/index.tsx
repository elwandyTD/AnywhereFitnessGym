import React from "react";
import { StyleProp, Text, View, ViewStyle } from "react-native";

import styles from "./styles";
import ScalingPressable from "Components/Animated/ScalingPressable";

interface ViewIconProps {
  children: React.ReactNode;
  text: string;
  style?: StyleProp<ViewStyle>;
}

const ViewIcon = ({ children, text, style }: ViewIconProps) => {
  return (
    <ScalingPressable pressableStyle={[styles.container, style]}>
      <View>
        {children}
      </View>
      <Text style={styles.textStyle}>{text}</Text>
    </ScalingPressable>
  )
}

export default React.memo(ViewIcon);