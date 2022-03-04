import React from "react";
import { StyleProp, StyleSheet, Text, TextStyle, ViewStyle } from "react-native";

import theme from "../../theme";
import AnimatedView from "../Animated/AnimatedView";

interface ButtonProps {
  disabled?: boolean;
  duration?: number;
  scaleTo?: number;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  text: string;
  onPress?(): void;
}

const Button = ({ duration, scaleTo, style, textStyle, text, onPress, disabled = false }: ButtonProps) => {
  return (
    <AnimatedView
      onPress={onPress}
      style={[styles.buttonContainer, style]}
      duration={duration}
      scaleTo={scaleTo}
      disabled={disabled}
    >
      <Text style={[styles.textStyle, textStyle]}>{text}</Text>
    </AnimatedView>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: theme.space.LG,
    minWidth: theme.sizes.BUTTON_WIDTH,
    height: theme.sizes.BUTTON_HEIGHT,
    borderWidth: theme.border.WIDTH,
    borderColor: theme.border.COLOR,
    borderRadius: theme.rounded.FULL,
    backgroundColor: theme.border.COLOR,
    ...theme.styles.flexCentered
  },
  textStyle: {
    color: "#FFF"
  }
});

export default React.memo(Button);