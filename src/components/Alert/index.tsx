import React, { forwardRef, useCallback, useRef, useState } from "react";
import { Text, View } from "react-native";
import Modal from "react-native-modal";
import LottieView from "lottie-react-native";

import LottieAssets from "Assets/lottie";
import ButtonTag from "../ButtonTag";
import styles from "./styles";

interface AlertProps {
  onConfirm?(): void;
  onCancel?(): void;
  onBackButtonPress?(): void;
  onBackdropPress?(): void;
  typeAlert?: "info" | "confirm";
  text?: string;
  type?: "success" | "danger"
}

export interface AlertHandle {
  open(): void;
  dismiss(): void;
}

const Alert = forwardRef<AlertHandle, AlertProps>(({ onCancel, onConfirm, onBackButtonPress, onBackdropPress, type = "success", typeAlert = "info" }, ref) => {
  const lottieSuccessRef = useRef<LottieView>(null);
  const lottieIncorrectRef = useRef<LottieView>(null);
  const [statusModal, setStatusModal] = useState(false);

  const _closeModal = useCallback(() => {
    setStatusModal(false);
  }, []);
  
  const _onBackdropPress = useCallback(() => {
    if (onBackdropPress) {
      onBackdropPress();
    } else {
      _closeModal();
    }
  }, []);

  const _onBackButtonPress = useCallback(() => {
    if (onBackButtonPress) {
      onBackButtonPress();
    } else {
      _closeModal();
    }
  }, []);

  const _openModal = useCallback(() => {
    setStatusModal(true);
  }, []);

  React.useImperativeHandle(ref, () => ({
    dismiss: () => {
      _closeModal();
    },
    open: () => {
      _openModal();
    },
  }), []);

  //////////////////////
  // Child Components //
  //////////////////////
  const _confirmChild: React.ReactNode = (
    <View>
      <Text>Confirm</Text>
    </View>
  );

  const _infoChild: React.ReactNode = (
    <View style={styles.wrapper}>
      <LottieView
        ref={lottieSuccessRef} 
        source={LottieAssets.Success}
        autoPlay
        loop
        style={styles.lottie}
        speed={1.5}
      />
      <Text style={styles.message}>Your payment has been successfully</Text>
      <ButtonTag 
        title="OK"
        onPress={_closeModal}
        style={styles.button}
        textStyle={styles.textButton}
        type="primary"
      />
    </View>
  );

  const child: React.ReactNode = (
    <>
      {typeAlert === "confirm" ? _confirmChild : null}
      {typeAlert === "info" ? _infoChild : null}
    </>
  );

  return (
    <Modal 
      isVisible={statusModal}
      onBackButtonPress={_onBackButtonPress}
      onBackdropPress={_onBackdropPress}
      animationIn="fadeIn"
      animationOut="fadeOut"
      backdropTransitionOutTiming={0}
    >
      {child}
    </Modal>
  );
});

export default React.memo(Alert);