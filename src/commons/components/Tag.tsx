import React from "react";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

import theme from "../theme";

interface TagProps {
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  text: string;
}

const Tag = ({ style, text, containerStyle }: TagProps) => {
  return (
    <View style={[styles.buttonContainer, containerStyle]}>
      <Text style={[styles.textStyle, style]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignSelf: "flex-start",
    marginBottom: theme.space.XS,

  },
  textStyle: {
    paddingHorizontal: theme.space.MD,
    paddingVertical: theme.space.XS,
    fontSize: theme.fontSize.XS,
    width: "auto",
    color: theme.colors.darkGray,
    ...theme.styles.borderRounded
  },
});

export default React.memo(Tag);