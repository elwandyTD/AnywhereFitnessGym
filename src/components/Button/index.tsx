import React from "react";
import { StyleProp, Text, TextStyle, ViewStyle } from "react-native";

import styles from "./styles";
import ScalingPressable from "Components/Animated/ScalingPressable";

interface ButtonProps {
  disabled?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  duration?: number;
  scaleTo?: number;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  text: string;
  onPress?(): void;
}

const Button = ({ duration, scaleTo, style, textStyle, containerStyle, text, onPress, disabled = false }: ButtonProps) => {
  return (
    <ScalingPressable
      onPress={onPress}
      pressableStyle={[styles.buttonContainer, style]}
      containerStyle={containerStyle}
      duration={duration}
      scaleTo={scaleTo}
      disabled={disabled}
    >
      <Text style={[styles.textStyle, textStyle]}>{text}</Text>
    </ScalingPressable>
  );
}

export default React.memo(Button);