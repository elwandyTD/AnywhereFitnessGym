import React from "react";
import { NativeSyntheticEvent, StyleProp, StyleSheet, TextInputChangeEventData, TextInputProps, TextStyle } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import theme from "../../theme";

interface SearchInputProps {
  onEnter?(): void;
  onChangeText?(text: string): void;
  style?: StyleProp<TextStyle>;
  placeholder?: string;
}

const SearchInput = ({ style, onChangeText, placeholder = "Search..." }: SearchInputProps) => {
  return (
    <TextInput 
      style={[styles.container, style]} 
      placeholder={placeholder} 
      onChangeText={onChangeText}
    />
  )
}

export default React.memo(SearchInput);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: theme.sizes.INPUT_HEIGHT,
    borderRadius: theme.sizes.INPUT_HEIGHT,
    borderWidth: theme.border.WIDTH,
    borderColor: theme.border.COLOR,
    paddingHorizontal: theme.space.LG,
    paddingVertical: 0,
    fontSize: theme.sizes.INPUT_FONT_SIZE
  }
});