import React, { useCallback } from "react";
import { StyleProp, StyleSheet, Text, TextStyle, ViewStyle } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import theme from "../../theme";

interface ButtonProps {
  scaleTo?: number;
  duration?: number;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  text: string;
  onPress?(): void;
}

const Button = ({ duration = theme.animation.duration, scaleTo = theme.animation.scaleTo, style, textStyle, text, onPress }: ButtonProps) => {
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
    <Animated.View style={[animatedStyles]}>
      <TouchableWithoutFeedback
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        style={[styles.buttonContainer, style ]}
      >
        <Text style={[styles.textStyle, textStyle]}>{text}</Text>
      </TouchableWithoutFeedback>
    </Animated.View>
  );
}

export default React.memo(Button);

const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: theme.space.LG,
    minWidth: theme.sizes.BUTTON_WIDTH,
    height: theme.sizes.BUTTON_HEIGHT,
    borderWidth: theme.border.WIDTH,
    borderColor: theme.border.COLOR,
    borderRadius: theme.rounded.FULL,
    backgroundColor: theme.border.COLOR,
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  textStyle: {
    color: "#FFF"
  }
});