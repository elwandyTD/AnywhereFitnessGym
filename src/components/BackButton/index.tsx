import React from "react";
import { StyleProp, Text, ViewStyle } from "react-native";
import FAIcon from "react-native-vector-icons/FontAwesome";

import styles from "./style";
import ScalingPressable from "../Animated/ScalingPressable";

type BackButtonProps = {
  style?: StyleProp<ViewStyle>
  onPress?(): void;
}

const BackButton = ({ style, onPress }: BackButtonProps) => {
  return (
    <ScalingPressable
      style={[styles.buttonStyle, style]}
      onPress={onPress}
    >
      <FAIcon 
        name="chevron-left" 
        size={10}
        style={styles.iconStyle}
      />
      <Text style={styles.textStyle}>一覧へ</Text>
    </ScalingPressable>
  );
}

export default React.memo(BackButton);