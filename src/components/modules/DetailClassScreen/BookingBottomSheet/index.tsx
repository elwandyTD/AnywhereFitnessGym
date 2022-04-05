import React, { forwardRef, useCallback, useImperativeHandle, useMemo, useRef, useState } from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import moment from "moment";

import ButtonTag from "App/components/ButtonTag";
import CustomBottomSheet, { CustomBottomSheetHandle } from "App/components/CustomBottomSheet";
import TextField from "App/components/TextField";
import styles from "./styles";
import theme from "App/global/theme";
import { ClassPriceDetail } from "App/types/class";

type CustomClassPriceDetail = ClassPriceDetail & {
  type: string;
  number: string;
}

interface BookingBottomSheetProps {
  // selectedPackage: CustomClassPriceDetail | null;
  // onConfirmCalender(): void;
  // onSelectedPackage(): void;
}

export type BookingBottomHandle = {
  open(): void;
  close(): void;
}

const BookingBottomSheet = forwardRef<BookingBottomHandle, BookingBottomSheetProps>(({  }, ref) => {
  const _class = useSelector((state: AppStore.AppState) => state.class);
  const bottomSheetRef = useRef<CustomBottomSheetHandle>(null);
  const [date, setDate] = useState<string | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<CustomClassPriceDetail | null>(null);

  const { detailClass, loading } = _class;

  const packageList: CustomClassPriceDetail[] = useMemo(() => {
    const hourlyPrice: {[key: string]: ClassPriceDetail} = JSON.parse(JSON.stringify(detailClass.price?.hourly || {}));
    const monthlyPrice: {[key: string]: ClassPriceDetail} = JSON.parse(JSON.stringify(detailClass.price?.monthly || {}));
    const list = {...hourlyPrice, ...monthlyPrice}
    
    const updatedList: CustomClassPriceDetail[] = Object.keys(list).map((val) => {
      const item: any = {};
      if (Object.keys(hourlyPrice).includes(val)) {
        item.type = "hourly";
      } else {
        item.type = "monthly";
      }
      item.number = val;

      return Object.assign(item, list[val]);
    });
    
    return updatedList;
  }, [detailClass]);

  const _onConfirmCalender = useCallback((date: string) => {
    console.log("Masuk ke sini");
    setDate(date);
  }, [date]);

  const _onSelectedPackage =  useCallback((item: CustomClassPriceDetail) => {
    console.log(selectedPackage?.number, item.number)
    if (!selectedPackage || (selectedPackage && selectedPackage.number !== item.number)) {
      setSelectedPackage(item);
      return;
    }
    
    setSelectedPackage(null);
  }, [selectedPackage]);

  useImperativeHandle(ref, () => ({
    open: () => {
      bottomSheetRef.current?.expand();
    },
    close: () => {
      bottomSheetRef.current?.close();
    },
  }), [])

  return (
    <CustomBottomSheet ref={bottomSheetRef}>
      <View style={styles.bottomsheetContainer}>
          <Text style={styles.textHeader}>Choose Your Package</Text>
          <Text style={[styles.textHeaderBottomsheet]}>Package</Text>
          <View style={styles.packageList}>
            {packageList.map((item, i) => (
              <ButtonTag
                key={i}
                active={item.number === selectedPackage?.number || false}
                type="transparent"
                title={`${item.number} mnt`} 
                style={styles.package}
                onPress={() => _onSelectedPackage(item)}
              />
            ))}
          </View>
        <View style={styles.rightInput}>
          <Text style={[styles.textTitleRightInput]}>Date</Text>
          <TextField 
            containerStyle={styles.textField}
            label="date"
            noLabel 
            type="date"
            value={date || ""}
            minimumDate={moment(new Date()).add(1, 'day').toDate()}
            onConfirmCalender={_onConfirmCalender}
          />
        </View>
        <View style={styles.rightInput}>
          <Text style={[styles.textTitleRightInput]}>Time</Text>
          <TextField 
            containerStyle={styles.textField}
            label="time"
            noLabel 
            type="select"
          />
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>価格</Text> 
          <Text style={styles.priceText}>JPY {selectedPackage?.discount_price || 0}</Text> 
        </View>
        <View>
          <Text>Checkout</Text>
        </View>
      </View>
    </CustomBottomSheet>
  )
})

export default React.memo(BookingBottomSheet);