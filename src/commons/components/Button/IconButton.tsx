import React, { useCallback } from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Animated, { Easing, useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";

import theme from "../../theme";

interface IconButtonProps {
  icon: React.ReactNode;
  onPress?(): void;
  style?: StyleProp<ViewStyle>;
  scaleTo?: number;
  duration?: number;
}

const IconButton = ({ onPress, icon, style, scaleTo = theme.animation.scaleTo, duration = theme.animation.duration }: IconButtonProps) => {
  const progress = useSharedValue(false);

  const onPressIn = useCallback(() => {
    progress.value = true
  }, []);

  const onPressOut = useCallback(() => {
    progress.value = false
  }, []);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{
        scale: progress.value ? 
          withTiming(scaleTo, { duration, easing: Easing.linear }) : 
          withTiming(1, { duration, easing: Easing.linear })
      }]}
  });

  return (
    <Animated.View 
      style={[animatedStyles]}
    >
      <TouchableWithoutFeedback 
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onPress={onPress}
        style={[ styles.buttonContainer, style ]}
      >
        {icon}
      </TouchableWithoutFeedback>
    </Animated.View>
  );
}

export default React.memo(IconButton);

const styles = StyleSheet.create({
  buttonContainer: {
    maxWidth: theme.sizes.ICON_BUTTON_SIZE,
    minWidth: theme.sizes.ICON_BUTTON_SIZE,
    height: theme.sizes.ICON_BUTTON_SIZE,
    borderWidth: theme.border.WIDTH,
    borderColor: theme.border.COLOR,
    borderRadius: theme.rounded.FULL,
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});