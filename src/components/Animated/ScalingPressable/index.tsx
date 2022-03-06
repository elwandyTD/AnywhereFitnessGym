import React, { useCallback } from "react";
import { StyleProp, ViewStyle, Pressable, StyleSheet } from "react-native";
import Animated, { useSharedValue } from "react-native-reanimated";

import theme from "Theme";
import { useScallingEffect } from "Hooks/animations";

interface ScalingPressableProps {
  containerStyle?: StyleProp<ViewStyle>;
  children: React.ReactNode;
  disabled?: boolean;
  duration?: number;
  onPress?(): void;
  scaleTo?: number;
  pressableStyle?: StyleProp<ViewStyle>;
}

const ScalingPressable: React.FC<ScalingPressableProps> = ({ 
  containerStyle,
  children,
  disabled = false,
  duration = theme.animation.duration,
  onPress,
  scaleTo = theme.animation.scaleTo,
  pressableStyle,
}) => {
  const isPressIn = useSharedValue(false);

  const onPressIn = useCallback(() => {
    isPressIn.value = true;
  }, []);

  const onPressOut = useCallback(() => {
    isPressIn.value = false;
  }, []);

  const animatedStyles = useScallingEffect(isPressIn, { duration, scaleTo });

  return (
    <Animated.View style={[containerStyle, animatedStyles]}>
      <Pressable
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        style={pressableStyle}
        disabled={disabled}
      >
        {children}
      </Pressable>
    </Animated.View>
  );
}

export default React.memo(ScalingPressable);