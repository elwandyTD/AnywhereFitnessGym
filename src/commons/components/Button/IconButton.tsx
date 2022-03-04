import React from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";

import theme from "../../theme";
import AnimatedView from "../Animated/AnimatedView";

interface IconButtonProps {
  icon: React.ReactNode;
  onPress?(): void;
  style?: StyleProp<ViewStyle>;
  scaleTo?: number;
  duration?: number;
}

const IconButton = ({ onPress, icon, style, scaleTo, duration }: IconButtonProps) => {
  return (
    <AnimatedView
      onPress={onPress}
      style={[ styles.buttonContainer, style ]}
      scaleTo={scaleTo}
      duration={duration}
    >
      {icon}
    </AnimatedView>
  );
}

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

export default React.memo(IconButton);