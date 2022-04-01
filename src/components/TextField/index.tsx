import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Pressable, ScrollView, StyleProp, Text, View, ViewStyle } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import FeIcon from "react-native-vector-icons/Feather";
import Modal from "react-native-modal";
import DatePicker from "react-native-date-picker";
import { Calendar, CalendarProps } from "react-native-calendars";
import moment from "moment";

import styles from "./styles";
import ButtonTag from "../ButtonTag";
import SelectItem from "./SelectItem";
import theme from "App/global/theme";

type TextFieldProps = {
  label: string;
  onChangeText?(text: string): void;
  type?: "text" | "password" | "date" | "select";
  noLabel?: boolean;
  smallLabel?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  selectMultiple?: boolean;
  value?: string;
  onConfirmDate?(date: Date): void;
  minimumDate?: Date;
  items?: [];
  itemVarShow?: string;
  itemVarId?: string;
  multiple?: boolean;
}

const TextField = ({ 
  label, 
  onChangeText, 
  type = "text", 
  noLabel = false, 
  smallLabel = false, 
  containerStyle, 
  selectMultiple = false, 
  value = '', 
  onConfirmDate, 
  minimumDate = new Date(),
  items = [],
  itemVarId = "id",
  itemVarShow = "name",
  multiple = false
}: TextFieldProps) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [secureText, setSecureText] = useState<boolean>(type === "password" ? true : false);
  const [showModalDate, setShowModalDate] = useState<boolean>(false);
  const [showModalSelect, setShowModalSelect] = useState<boolean>(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [disabledDays, setDisabledDays] = useState<{[key: string]: any}>({});
  // const [selected, setSelected] = useState("2022-03-28");

  const marked = useMemo(() => {
    if (!selected) {
      return {};
    }
    
    return {
      [selected]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: theme.colors.green,
        selectedTextColor: theme.colors.white
      }
    };
  }, [selected]);

  const checkDay = (value: string) => value.split(" ")[1] === 'Saturday' || value.split(" ")[1] === 'Sunday';

  const getDaysInMonths = (month: number, year: number, daysIndexes: number[] = [7]) => {
    let pivot = moment().month(month).year(year).startOf('month');
    const end = moment().month(month).year(year).endOf('month');
    let dates: {[key: string]: any} = {};
    const disabled = { disabled: true, disableTouchEvent: true };
    while (pivot.isBefore(end)) {
      daysIndexes.forEach((day) => {
        const copy = moment(pivot);
        dates[copy.day(day).format('YYYY-MM-DD')] = disabled;
      });
      pivot.add(7, 'days');
    }
    setDisabledDays(dates);
    return dates;
  }

  const onPressSecurePassword = useCallback(() => {
    setSecureText(!secureText);
  }, [secureText]);

  const onDayPress: CalendarProps['onDayPress'] = useCallback(day => {
    setSelected(day.dateString);
  }, []);

  const _setStatusModalDate = useCallback(() => {
    setShowModalDate(!showModalDate)
  }, [showModalDate]);

  const _setStatusModalSelect = useCallback(() => {
    setShowModalSelect(!showModalSelect)
  }, [showModalSelect]);

  const _onPressSelectItem = useCallback((value: string) => {
    const newValues: string[] = JSON.parse(JSON.stringify(selectedValues));

    if (multiple) {
      const includedItem = selectedValues.includes(value);

      if (includedItem) {
        const filteredValues: string[] = newValues.filter((newValue) => newValue !== value);
        setSelectedValues(filteredValues);
      } else {
        newValues.push(value);
        setSelectedValues(newValues);
      }
    } else {
      newValues[0] = value
      setSelectedValues(newValues);
    }
  }, [selectedValues, multiple])

  useEffect(() => {
    getDaysInMonths(moment().month(), moment().year());
  }, []);

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
              <Text>{!value ? 'DD/MM/YYYY' : moment(value).format('MM/DD/YYYY')}</Text>
            </Pressable>
            <Modal 
              isVisible={showModalDate}
              onBackButtonPress={_setStatusModalDate}
              onBackdropPress={_setStatusModalDate}
              animationIn="fadeIn"
              animationOut="fadeOut"
              backdropTransitionOutTiming={0}
            >
              <View 
                style={styles.modalContainer}
              >
                <Text style={styles.modalTitle}>Select Time</Text>
                <Calendar
                  minDate="2022-03-28"
                  onDayPress={onDayPress}
                  enableSwipeMonths
                  hideExtraDays
                  dayComponent={({ accessibilityLabel, date, state }) => {
                    return (
                      <View></View>
                    );
                  }}
                  theme={{
                    arrowColor: theme.colors.green,
                    todayTextColor: theme.colors.black,
                    textColor: theme.colors.black,
                    selectedDayBackgroundColor: theme.colors.green,
                    selectedDayTextColor: theme.colors.white,
                  }}
                  style={{ 
                    marginVertical: 15,
                    borderRadius: 15,
                    overflow: "hidden"
                  }}
                  onMonthChange={(date) => {
                    getDaysInMonths(date.month - 1, date.year);
                  }}
                  markedDates={disabledDays}
                  // markedDates={{...disabledDays, ...marked}}
                />
                <View style={styles.modalButtons}>
                  <ButtonTag 
                    title="Cancel" 
                    style={{ marginRight: 5 }} 
                    type="primary"
                    onPress={_setStatusModalDate} 
                  />
                  <ButtonTag 
                    title="Apply"
                    type="primary"
                    onPress={_setStatusModalDate}
                  />
                </View>
              </View>
            </Modal>
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
                    onPress={_onPressSelectItem}
                  />
                </ScrollView>
                <View style={styles.modalButtons}>
                  <ButtonTag 
                    title="Cancel" 
                    style={{ marginRight: 5 }} 
                    type="primary"
                    onPress={_setStatusModalSelect} 
                  />
                  <ButtonTag 
                    title="Apply"
                    type="primary"
                    onPress={_setStatusModalSelect}
                  />
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