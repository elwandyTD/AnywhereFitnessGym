import { Easing, SharedValue, useAnimatedStyle, withSpring, withTiming } from "react-native-reanimated"
import theme from "../theme"

type AnimationEffectSettings = {
  activeBackgroundColor?: string;
  defaultBackgroundColor?: string;
  duration?: number;
  scaleTo: number;
  scaleFrom?: number;
}

type AnimationList = {
  isPressIn: SharedValue<boolean>;
  isActive: SharedValue<boolean>;
}

const defaultScaleAnimationSetting: AnimationEffectSettings = {
  activeBackgroundColor: "transparent",
  defaultBackgroundColor: "transparent",
  duration: theme.animation.duration, 
  scaleTo: theme.animation.scaleTo,
  scaleFrom: 1
}

export const useAnimationEffect = ({ isPressIn, isActive }: AnimationList, { duration = defaultScaleAnimationSetting.duration, scaleTo = defaultScaleAnimationSetting.scaleTo, scaleFrom = defaultScaleAnimationSetting.scaleFrom, defaultBackgroundColor = defaultScaleAnimationSetting.defaultBackgroundColor, activeBackgroundColor = defaultScaleAnimationSetting.activeBackgroundColor }: AnimationEffectSettings = defaultScaleAnimationSetting) => {
  const styles = useAnimatedStyle(() => {
    return {
      transform: [{
        scale: isPressIn.value ? 
          withTiming(scaleTo, { duration, easing: Easing.linear }) : 
          withTiming(Number(scaleFrom), { duration, easing: Easing.linear })
      }],
      backgroundColor: isActive.value ? 
        withTiming(String(activeBackgroundColor), { duration, easing: Easing.linear }) : 
        withTiming(String(defaultBackgroundColor), { duration, easing: Easing.linear })
    }
  })

  return styles;
}