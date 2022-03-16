import React, { useMemo } from "react";
import { StyleProp, Text, TextStyle, View, ViewStyle } from "react-native";

import styles from "./styles";
import ScalingPressable from "Components/Animated/ScalingPressable";

interface ViewIconProps {
  active?: boolean;
  children: React.ReactNode;
  text: string;
  style?: StyleProp<ViewStyle>;
  onPress?(): void;
}

type RenderStyleProps = {
  button: StyleProp<ViewStyle>;
  text: StyleProp<TextStyle> ;
}

const ViewIcon = ({ active, children, text, style, onPress }: ViewIconProps) => {
  const renderStyle: RenderStyleProps = useMemo(() => {
    const button: StyleProp<ViewStyle> = [styles.container];
    const text: StyleProp<TextStyle> = [];

    if (active) {
      button.push(styles.buttonActive);
      text.push(styles.textActive);
    } else {
      button.push(styles.buttonDefault);
      text.push(styles.textDefault);
    }
    
    return { button, text }
  }, [active]);

  return (
    <ScalingPressable 
      style={[renderStyle.button, style]}
      onPress={onPress}
    >
      <View>
        {children}
      </View>
      <Text style={[renderStyle.text]}>{text}</Text>
    </ScalingPressable>
  )
}

export default React.memo(ViewIcon);