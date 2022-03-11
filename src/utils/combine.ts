import { StyleProp, ViewStyle } from "react-native";

export const combineViewStyle = (mainStyle: StyleProp<ViewStyle>, anotherStyle: StyleProp<ViewStyle>) => {
  const style: StyleProp<ViewStyle> = [ ...[mainStyle] ];
  // return { ...mainStyle, ...anotherStyle };
}