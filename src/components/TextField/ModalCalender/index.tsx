import ButtonTag from "App/components/ButtonTag";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Text, View } from "react-native";
import Modal from "react-native-modal";

import styles from "./styles";
import Calender from "../Calender";

interface ModalCalenderProps {
  date: string;
  showModalDate: boolean;
  setStatusModal(): void;
  onConfirmModal?(date: string): void;
}

const ModalCalender = ({ setStatusModal, showModalDate, onConfirmModal, date = "" }: ModalCalenderProps) => {
  console.log(date, "REAL DATE")
  const [tempDate, setTempDate] = useState<string>(date);
  // const [tempDate, setTempDate] = useState<string>(() => {
  //   console.log(date)
  //   return date;
  // });

  const readDate = useMemo(() => !tempDate ? date : tempDate, [date, tempDate]);

  const _onChangeDay = useCallback((newDate: string) => {
    setTempDate(newDate)
  }, []);

  const _closeModal = useCallback(() => {
    setStatusModal();
    setTempDate("");
  }, [setStatusModal]);

  const _onConfirmDate = useCallback(() => {
    if (onConfirmModal) {
      onConfirmModal(tempDate);
      _closeModal()
    }
  }, [tempDate, onConfirmModal]);

  return (
    <Modal 
      isVisible={showModalDate}
      onBackButtonPress={_closeModal}
      onBackdropPress={_closeModal}
      animationIn="fadeIn"
      animationOut="fadeOut"
      backdropTransitionOutTiming={0}
    >
      <View 
        style={styles.modalContainer}
      >
        <Text style={styles.modalTitle}>Select Time</Text>
        <Calender
          valueDate={readDate}
          onChangeDay={_onChangeDay}
        />
        <View style={styles.modalButtons}>
          <ButtonTag 
            title="Cancel" 
            style={{ marginRight: 5 }} 
            type="primary"
            onPress={_closeModal} 
          />
          <ButtonTag 
            title="Apply"
            type="primary"
            onPress={_onConfirmDate}
          />
        </View>
      </View>
    </Modal>
  );
}

export default React.memo(ModalCalender);