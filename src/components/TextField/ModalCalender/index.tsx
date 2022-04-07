import ButtonTag from "App/components/ButtonTag";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Text, View } from "react-native";
import Modal from "react-native-modal";

import styles from "./styles";
import Calender from "../Calender";

interface ModalCalenderProps {
  date: string;
  showModalCalender: boolean;
  // setStatusModal(): void;
  closeModal(): void;
  // openModal(): void;
  onConfirmModal?(date: string): void;
}

const ModalCalender = ({ closeModal, showModalCalender, onConfirmModal, date = "" }: ModalCalenderProps) => {
  const [tempDate, setTempDate] = useState<string>(date);

  const _readDate = useMemo(() => !tempDate ? date : tempDate, [date, tempDate]);

  const _onChangeDay = useCallback((newDate: string) => {
    setTempDate(newDate)
  }, []);

  const _closeModal = useCallback(() => {
    closeModal();
    setTempDate("");
  }, [closeModal]);

  const _onConfirmDate = useCallback(() => {
    if (onConfirmModal) {
      onConfirmModal(tempDate);
      _closeModal()
    }
  }, [tempDate, onConfirmModal]);

  return (
    <Modal 
      isVisible={showModalCalender}
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
          valueDate={_readDate}
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