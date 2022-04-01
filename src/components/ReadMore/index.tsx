import React, { useCallback, useState } from "react";
import { Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Animated, { useAnimatedProps, useAnimatedStyle, useDerivedValue, useSharedValue, withSpring, WithSpringConfig, withTiming } from "react-native-reanimated";

import styles from "./styles";
import ScalingPressable from "../Animated/ScalingPressable";

type ReadMoreProps = {
  children?: React.ReactNode;
  text?: string;
  minimazeTo?: number;
}

const defaultMaxMinimaze = 200;
const withSpringConfig: WithSpringConfig = {
  damping: 14,
  stiffness: 50,
}

const ReadMore = ({ children, minimazeTo = defaultMaxMinimaze }: ReadMoreProps) => {
  const [isMinimaze, setIsMinimaze] = useState(true);
  const text = useSharedValue("Read more");
  const minH = useSharedValue(minimazeTo < defaultMaxMinimaze ? defaultMaxMinimaze : minimazeTo);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      maxHeight: isMinimaze ? withSpring(minH.value, withSpringConfig) : withSpring(2000, withSpringConfig)
    }
  }, [isMinimaze]);

  const _onClickReadMore = useCallback(() => {
    setIsMinimaze(!isMinimaze);
  }, [isMinimaze]);

  return (
    <View 
      style={styles.container}
    >
      <Animated.View
        style={[styles.contentContainer, animatedStyle]}
      >
        {children}
        <LinearGradient
          style={styles.btnReadMoreContainer}
          colors={["rgba(255, 255, 255, .2)", "rgba(255, 255, 255, .9)", "rgba(255, 255, 255, .9)", "rgba(255, 255, 255, 1)"]}
        >
          <ScalingPressable
            style={styles.btnReadMore}
            onPress={_onClickReadMore}
          >
            <Text style={styles.textBtnReadMore}>Show {isMinimaze ? "more" : "less"}</Text>
          </ScalingPressable>
        </LinearGradient>
      </Animated.View>
    </View>
  )
}

export default React.memo(ReadMore);