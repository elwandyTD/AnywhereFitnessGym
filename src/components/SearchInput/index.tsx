import React from "react";
import { StyleProp, TextStyle } from "react-native";
import { TextInput } from "react-native-gesture-handler";

import styles from "./styles";

interface SearchInputProps {
  onEnter?(): void;
  onChangeText?(text: string): void;
  style?: StyleProp<TextStyle>;
  placeholder?: string;
  value: string;
}

const SearchInput = ({ style, onChangeText, placeholder = "Search...", value = "" }: SearchInputProps) => {
  return (
    <TextInput 
      style={[styles.container, style]} 
      placeholder={placeholder} 
      onChangeText={onChangeText}
      value={value}
    />
  )
}

export default React.memo(SearchInput);