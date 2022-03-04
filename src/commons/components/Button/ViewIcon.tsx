import React from "react";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

import AnimatedView from "../Animated/AnimatedView";
import theme from "../../theme";

interface ViewIconProps {
  children: React.ReactNode;
  text: string;
  style?: StyleProp<ViewStyle>;
}

const ViewIcon = ({ children, text, style }: ViewIconProps) => {
  return (
    <AnimatedView style={[styles.container, style]}>
      <View>
        {children}
      </View>
      <Text style={styles.textStyle}>{text}</Text>
    </AnimatedView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: theme.sizes.VIEWICON_SIZE,
    height: theme.sizes.VIEWICON_SIZE,
    borderColor: theme.colors.black,
    borderWidth: theme.border.WIDTH,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.rounded.LG
  },
  textStyle: {
    color: theme.colors.black,
    fontSize: theme.fontSize.MD
  }
});

export default React.memo(ViewIcon);