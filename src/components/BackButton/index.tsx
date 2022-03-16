import React from "react";
import FAIcon from "react-native-vector-icons/FontAwesome";

import styles from "./style";
import ScalingPressable from "../Animated/ScalingPressable";
import { StyleProp, ViewStyle } from "react-native";

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
        size={14}
        style={styles.iconStyle}
      />
    </ScalingPressable>
  );
}

export default React.memo(BackButton);