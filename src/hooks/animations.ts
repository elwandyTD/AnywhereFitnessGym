import { Easing, SharedValue, useAnimatedStyle, withSpring, withTiming } from "react-native-reanimated";

import theme from "Theme";

type AnimationEffectSettings = {
  activeBackgroundColor?: string;
  defaultBackgroundColor?: string;
  duration?: number;
  scaleTo?: number;
  scaleFrom?: number;
}

type AnimationList = {
  isPressIn: SharedValue<boolean>;
  isActive: SharedValue<boolean>;
}

const defaultAnimationEffectSetting: AnimationEffectSettings = {
  activeBackgroundColor: "transparent",
  defaultBackgroundColor: "transparent",
  duration: theme.animation.duration, 
  scaleTo: theme.animation.scaleTo,
  scaleFrom: 1
}

export const useAnimationEffect = ({ isPressIn, isActive }: AnimationList, { duration = defaultAnimationEffectSetting.duration, scaleTo = defaultAnimationEffectSetting.scaleTo, scaleFrom = defaultAnimationEffectSetting.scaleFrom, defaultBackgroundColor = defaultAnimationEffectSetting.defaultBackgroundColor, activeBackgroundColor = defaultAnimationEffectSetting.activeBackgroundColor }: AnimationEffectSettings = defaultAnimationEffectSetting) => {
  const styles = useAnimatedStyle(() => {
    return {
      transform: [{
        scale: isPressIn.value ? 
          withTiming(Number(scaleTo), { duration, easing: Easing.linear }) : 
          withTiming(Number(scaleFrom), { duration, easing: Easing.linear })
      }],
      backgroundColor: isActive.value ? 
        withTiming(String(activeBackgroundColor), { duration, easing: Easing.linear }) : 
        withTiming(String(defaultBackgroundColor), { duration, easing: Easing.linear })
    }
  })

  return styles;
}

export const useScallingEffect = (isPressIn: AnimationList["isPressIn"], { scaleFrom = defaultAnimationEffectSetting.scaleFrom, scaleTo = defaultAnimationEffectSetting.scaleTo, duration = defaultAnimationEffectSetting.duration }: AnimationEffectSettings) => {
  const styles = useAnimatedStyle(() => {
    return {
      transform: [{
        scale: isPressIn.value ? 
          withTiming(Number(scaleTo), { duration, easing: Easing.linear }) : 
          withTiming(Number(scaleFrom), { duration, easing: Easing.linear })
      }],
    }
  });

  return styles;
}

type BackgroundColorSetting = {
  fromColor?: string;
  toColor?: string;
}

export const useBackgroundColorEffect = (isActive: AnimationList["isActive"], { fromColor = theme.colors.white, toColor = theme.colors.gray }: BackgroundColorSetting) => {
  const styles = useAnimatedStyle(() => {
    return {
      backgroundColor: isActive.value ? toColor : fromColor
    }
  });

  return styles
}