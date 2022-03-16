import React, { useMemo } from "react";
import { StyleProp, Text, View, ViewStyle, TextStyle } from "react-native";

import styles from "./styles";

interface TagProps {
  style?: StyleProp<TextStyle>;
  text: string;
  type?: "default" | "secondary";
  size?: "sm" | "md" | "lg";
  marginBottom?: number;
}

type RenderStyleProps = {
  container: StyleProp<ViewStyle>;
  text: StyleProp<TextStyle>;
}

const Tag = ({ style, text, type = "default", size = "md", marginBottom = 0 }: TagProps) => {
  const renderStyle: RenderStyleProps = useMemo(() => {
    const container: StyleProp<ViewStyle> = [];
    const text: StyleProp<TextStyle> = [styles.textContainer];

    if (type === "default") {
      text.push(styles.default);
    } else {
      text.push(styles.secondary);
    }

    switch(size) {
      case "sm": 
        text.push(styles.sm)
      break;
      case "lg":
        text.push(styles.lg)
      break;
      case "md":
      default: 
        text.push(styles.md)
      break;
    }

    return { container, text }
  }, []);

  return (
    <Text style={[renderStyle.text, style, { marginBottom }]}>{text}</Text>
  );
    // <View style={[styles.buttonContainer, containerStyle]}>
    // </View>
}

export default React.memo(Tag);