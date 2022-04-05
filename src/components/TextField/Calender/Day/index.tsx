import React, { useMemo } from "react";
import { StyleProp, Text, TextStyle } from "react-native";
import { DateData } from "react-native-calendars";

import styles from "./styles";
import ScalingPressable from "Components/Animated/ScalingPressable";

interface DayProps {
  active: boolean;
  date: (string & DateData) | undefined;
  onPress(): void;
  disabled: boolean;
}

type RenderStyleProps = {
  text: StyleProp<TextStyle>;
}

const Day = ({ active, disabled, date }: DayProps) => {
  const renderStyle: RenderStyleProps = useMemo(() => {
    const text: StyleProp<TextStyle> = [styles.day];

    if (active) {
      text.push(styles.dayActive);
    }

    if (disabled) {
      text.push(styles.dayDisabled)
    }

    return { text };
  }, [active, disabled]);

  return (
    <ScalingPressable 
      disabled={disabled}
    >
      <Text
        style={renderStyle.text}
      >{date?.day}</Text>
    </ScalingPressable>
  );
}

export default React.memo(Day);