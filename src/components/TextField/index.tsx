import React, { useCallback, useState } from "react";
import { Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import FeIcon from "react-native-vector-icons/Feather";

import styles from "./styles";

type TextFieldProps = {
  // icon?: React.ReactNode;
  label: string;
  onChangeText?(text: string): void;
  type?: "text" | "password"
}

const TextField = ({ label, onChangeText, type = "text" }: TextFieldProps) => {
  const [secureText, setSecureText] = useState<boolean>(type === "password" ? true : false);

  const onPressSecurePassword = useCallback(() => {
    setSecureText(!secureText);
  }, [secureText]);

  return (
    <View style={styles.container}>
      <Text style={[styles.label]}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput 
          onChangeText={onChangeText}
          style={[styles.input, type === "password" && styles.inputPassword]} 
          secureTextEntry={secureText}
        />
        {type === "password" && (
          <FeIcon 
            name={secureText ? "eye-off" : "eye"} 
            onPress={onPressSecurePassword} 
            style={styles.passwordIcon}
          />
        )}
      </View>
    </View>
  );
}

export default React.memo(TextField);