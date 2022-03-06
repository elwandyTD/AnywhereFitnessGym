import React from "react";
import { StyleProp, Text, View, ViewStyle } from "react-native";

import styles from "./styles";

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

export default React.memo(Tag);