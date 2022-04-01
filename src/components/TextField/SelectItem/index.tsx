import React, { useMemo } from "react";
import { Pressable, StyleProp, Text, TextStyle, View, ViewStyle } from "react-native";

import styles from "./styles";
import ScalingPressable from "Components/Animated/ScalingPressable";
import theme from "App/global/theme";
import { RFValue } from "react-native-responsive-fontsize";

type SelectItemProps = {
  item: {
    id: string;
    name: string;
    value: string;
  },
  active: boolean;
  disabled: boolean;
  onPress(value: string): void 
}

type RenderStyleProps = {
  button: StyleProp<ViewStyle>;
  text: StyleProp<TextStyle>;
}

const SelectItem = ({ item, active = false, disabled }: SelectItemProps) => {
  const { id, value, name } = item;

  const renderStyle: RenderStyleProps = useMemo(() => {
    const button: StyleProp<ViewStyle> = [styles.button];
    const text: StyleProp<TextStyle> = [styles.text];

    if (active) {
      button.push(styles.bgActive);
      text.push(styles.textActive);
    }

    if (disabled) {
      text.push(styles.textDisabled);
    }

    return { button, text }
  }, [active, disabled]);

  return (
    <View style={styles.container}>
      <Pressable 
        style={renderStyle.button}
        android_ripple={{ color: theme.colors.darkGray }}
        disabled={disabled}
      >
        <Text style={renderStyle.text}>{name}</Text>
      </Pressable>
    </View>
  );
}

export default React.memo(SelectItem);