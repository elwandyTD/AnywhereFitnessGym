import React, { useCallback } from "react";
import { StyleProp, ViewStyle, Pressable, StyleSheet } from "react-native";
import Animated, { useSharedValue } from "react-native-reanimated";

import theme from "Theme";
import { useBackgroundColorEffect, useScallingEffect } from "Hooks/animations";

interface ScalingPressableProps {
  active?: boolean;
  activeColorFrom?: string;
  activeColorTo?: string;
  containerStyle?: StyleProp<ViewStyle>;
  children: React.ReactNode;
  disabled?: boolean;
  duration?: number;
  onPress?(): void;
  scaleTo?: number;
  style?: StyleProp<ViewStyle>;
}

const ScalingPressable: React.FC<ScalingPressableProps> = ({ 
  containerStyle,
  children,
  disabled = false,
  duration = theme.animation.duration,
  onPress,
  scaleTo = theme.animation.scaleTo,
  style,
  active,
  activeColorFrom, 
  activeColorTo
}) => {
  const isPressIn = useSharedValue(false);
  const isActive = useSharedValue<boolean>(Boolean(active));

  const _onPressIn = useCallback(() => {
    isPressIn.value = true;
  }, []);

  const _onPressOut = useCallback(() => {
    isPressIn.value = false;
  }, []);

  const _onPress = useCallback(() => {
    if (onPress) {
      onPress();
    }

    if (isPressIn.value) {
      isPressIn.value = false;
    }
  }, [isActive, isPressIn, onPress]);

  const animatedScalingStyles = useScallingEffect(isPressIn, { duration, scaleTo });
  // const animatedBgColorStyles = useBackgroundColorEffect(isActive, { fromColor: activeColorFrom, toColor: activeColorTo });

  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

  return (
    <AnimatedPressable 
      onPress={_onPress}
      disabled={disabled}
      onPressIn={_onPressIn}
      onPressOut={_onPressOut}
      style={[style, animatedScalingStyles]}
    >
      {children}
    </AnimatedPressable>
  )
}

export default React.memo(ScalingPressable);