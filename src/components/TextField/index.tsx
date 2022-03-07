import React, { useCallback, useState } from "react";
import { Pressable, StyleProp, Text, View, ViewStyle } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import FeIcon from "react-native-vector-icons/Feather";
import Modal from "react-native-modal";
import DatePicker from "react-native-date-picker";

import styles from "./styles";

type TextFieldProps = {
  // icon?: React.ReactNode;
  label: string;
  onChangeText?(text: string): void;
  type?: "text" | "password" | "date";
  noLabel?: boolean;
  smallLabel?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
}

const TextField = ({ label, onChangeText, type = "text", noLabel = false, smallLabel = false, containerStyle }: TextFieldProps) => {
  const [secureText, setSecureText] = useState<boolean>(type === "password" ? true : false);
  const [showModalDate, setShowModalDate] = useState<boolean>(false);

  const onPressSecurePassword = useCallback(() => {
    setSecureText(!secureText);
  }, [secureText]);

  const setStatusModalDate = useCallback(() => {
    setShowModalDate(!showModalDate)
    console.log(setShowModalDate)
  }, [showModalDate]);

  return (
    <View style={[styles.container, containerStyle]}>
      {!noLabel && (
        <Text style={[smallLabel ? styles.smLabel : styles.label]}>{label}</Text>
      )}
      <View style={styles.inputContainer}>
        { type === "date" ? (
          <>
            <Pressable 
              style={[styles.input, styles.inputDate]}
              onPress={setStatusModalDate}
            >
              <Text>DD/MM/YY</Text>
            </Pressable>
            <DatePicker
              modal
              date={new Date()}
              mode="date"
              open={showModalDate}
              onConfirm={(date) => {
                console.log(date);
              }}
              onCancel={setStatusModalDate}
            />
          </>
        ) : (
          <>
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
          </>
          )}
      </View>
    </View>
  );
}

export default React.memo(TextField);