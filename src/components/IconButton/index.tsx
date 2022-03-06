import React from "react";
import { StyleProp, ViewStyle } from "react-native";

import styles from "./styles";
import ScalingPressable from "Components/Animated/ScalingPressable";

interface IconButtonProps {
  icon: React.ReactNode;
  onPress?(): void;
  style?: StyleProp<ViewStyle>;
  scaleTo?: number;
  duration?: number;
}

const IconButton: React.FC<IconButtonProps> = ({ onPress, icon, style, scaleTo, duration }) => {
  return (
    <ScalingPressable
      onPress={onPress}
      pressableStyle={[styles.buttonContainer, style]}
      scaleTo={scaleTo}
      duration={duration}
    >
      {icon}
    </ScalingPressable>
  );
}

export default React.memo(IconButton);