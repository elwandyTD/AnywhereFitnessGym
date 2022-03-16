import React, { useCallback, useState } from "react";
import { Pressable, ScrollView, StyleProp, Text, View, ViewStyle } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import FeIcon from "react-native-vector-icons/Feather";
import Modal from "react-native-modal";
import DatePicker from "react-native-date-picker";

import styles from "./styles";
import ButtonTag from "../ButtonTag";
import SelectItem from "./SelectItem";

type TextFieldProps = {
  label: string;
  onChangeText?(text: string): void;
  type?: "text" | "password" | "date" | "select";
  noLabel?: boolean;
  smallLabel?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  selectMultiple?: boolean;
}

const TextField = ({ label, onChangeText, type = "text", noLabel = false, smallLabel = false, containerStyle, selectMultiple = false }: TextFieldProps) => {
  const [selectedValues, setSelectedValues] = useState<string | string[]>(selectMultiple ? [] : "");
  const [secureText, setSecureText] = useState<boolean>(type === "password" ? true : false);
  const [showModalDate, setShowModalDate] = useState<boolean>(false);
  const [showModalSelect, setShowModalSelect] = useState<boolean>(false);

  const onPressSecurePassword = useCallback(() => {
    setSecureText(!secureText);
  }, [secureText]);

  const _setStatusModalDate = useCallback(() => {
    setShowModalDate(!showModalDate)
  }, [showModalDate]);

  const _setStatusModalSelect = useCallback(() => {
    setShowModalSelect(!showModalSelect)
  }, [showModalSelect]);

  return (
    <View style={[styles.container, containerStyle]}>
      {!noLabel && (
        <Text style={[smallLabel ? styles.smLabel : styles.label]}>{label}</Text>
      )}
      <View style={styles.inputContainer}>
        {type === "date" && (
          <>
            <Pressable 
              style={[styles.input, styles.inputDate]}
              onPress={_setStatusModalDate}
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
              onCancel={_setStatusModalDate}
            />
          </>
        )}

        {(type === "text" || type === "password") && (
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

        {type === "select" && (
          <>
            <Pressable 
              style={[styles.input, styles.inputDate]}
              onPress={_setStatusModalSelect}
            >
              <Text>__:__ - __:__</Text>
            </Pressable>
            <Modal 
              isVisible={showModalSelect}
              onBackButtonPress={_setStatusModalSelect}
              onBackdropPress={_setStatusModalSelect}
              animationIn="fadeIn"
              animationOut="fadeOut"
              backdropTransitionOutTiming={0}
            >
              <View 
                style={styles.modalContainer}
              >
                <Text style={styles.modalTitle}>Select Time</Text>
                <ScrollView style={styles.modalScrollView}>
                  <SelectItem 
                    active={true}
                    disabled={false}
                    item={{ id: "", name: "12:00-12:30", value: "I am the modal content!" }}
                  />
                </ScrollView>
                <View style={styles.modalButtons}>
                  <ButtonTag title="Cancel" style={{ marginRight: 5 }} type="primary" />
                  <ButtonTag title="Apply" type="primary" />
                </View>
              </View>
            </Modal>
          </>
        )}
      </View>
    </View>
  );
}

export default React.memo(TextField);