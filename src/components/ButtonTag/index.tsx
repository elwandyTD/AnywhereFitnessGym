import React, { useMemo } from "react";
import { StyleProp, Text, TextStyle, View, ViewStyle } from "react-native";
import ScalingPressable from "Components/Animated/ScalingPressable";

import styles from "./styles";
import theme from "Theme";

interface ButtonTagProps {
  active?: boolean;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  onPress?(): void;
  textStyle?: StyleProp<TextStyle>;
  size?: "sm" | "md" | "lg";
  title: string;
  type?: "transparent" | "default" | "primary";
}

type RenderStyleProps = {
  button: StyleProp<ViewStyle>;
  text: StyleProp<TextStyle>;
  // container: StyleProp<ViewStyle>;
}

const ButtonTag = ({ title, size = "md", type = "default", containerStyle, style, textStyle, active, onPress }: ButtonTagProps) => {
  const renderStyle: RenderStyleProps = useMemo(() => {
    const button: StyleProp<ViewStyle>  = [styles.button];
    // const container: StyleProp<ViewStyle>  = [styles.container];
    const text: StyleProp<TextStyle> = [];

    switch (type) {
      case "transparent": 
        button.push(styles.transparent);
        // container.push(theme.styles.roundedBgTransparent);
        text.push(styles.textTransparent);

        if (active) {
          button.push(styles.transparentActive);
        }
      break;
      case "primary":
        button.push(styles.primary);
        // container.push(theme.styles.roundedBgPrimary);
        text.push(styles.textPrimary);
      break;
      case "default": 
      default:
        button.push(styles.default);
        // container.push(theme.styles.roundedBgDefault);
        text.push(styles.textDefault);
      break;
    }

    switch (size) {
      case "sm": 
        button.push(styles.buttonSizeSM);
      break;
      case "lg": 
        button.push(styles.buttonSizeLG);
        text.push(styles.textLg)
      break;
      case "sm": 
      default:
        button.push(styles.buttonSizeMD);
      break;
    }

    return { button, text };
    // return { button, text, container };
  }, [active, type, size]);

  return (
    <ScalingPressable 
      style={[renderStyle.button, style]}
      onPress={onPress}
      active={active}
    >
      <Text style={[renderStyle.text, textStyle]}>{title}</Text>
    </ScalingPressable>
  )
}

export default React.memo(ButtonTag);