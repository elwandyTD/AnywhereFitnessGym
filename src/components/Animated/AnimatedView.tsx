import React, { useCallback, useState } from "react";
import { StyleProp, ViewStyle, Pressable, StyleSheet } from "react-native";
import Animated, { useSharedValue } from "react-native-reanimated";

import theme from "Theme";
import { useAnimationEffect } from "Hooks/animations";

interface AnimatedViewProps {
  active?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  disabled?: boolean;
  duration?: number;
  onPress?(): void;
  scaleTo?: number;
  style?: StyleProp<ViewStyle>;
}

const AnimatedView = ({ 
  active = false,
  containerStyle,
  children,
  disabled = false,
  duration = theme.animation.duration,
  onPress,
  scaleTo = theme.animation.scaleTo,
  style,
}: AnimatedViewProps) => {
  // const [isPressIn, setIsPressIn] = useState(false);
  const isPressIn = useSharedValue(false);
  const isActive = useSharedValue(active);

  const onPressIn = useCallback(() => {
    // setIsPressIn(true);
    isPressIn.value = true;
  }, []);

  const onPressOut = useCallback(() => {
    // setIsPressIn(false);
    isPressIn.value = false;
  }, []);

  const animatedStyles = useAnimationEffect({ isPressIn, isActive }, { duration, scaleTo });

  return (
    <Animated.View style={[styles.containerStyle, containerStyle, animatedStyles]}>
      <Pressable
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        style={[style]}
        disabled={disabled}
        android_ripple={{ color: 'red' }}
      >
        {children}
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    borderRadius: theme.rounded.FULL
  }
});

export default React.memo(AnimatedView);