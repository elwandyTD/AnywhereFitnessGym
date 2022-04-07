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
import { normalizeDateNumber } from "App/utils/format";

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

  const days = useMemo(() => ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"], []);

  const generateFullBookingTime = useMemo(() => {
    const dateNow = moment();
    const dayNow: string = days[dateNow.day()] || "monday";
    
    if (detailClass.training?.detail) {
      // const newDate = 
      const dateClassNow = detailClass.training.detail[dayNow] || "monday";
      const startTime = moment(`${dateNow.format("YYYY-MM-DD")}T${dateClassNow.start_hours}:00`);
      const endTime = moment(`${dateNow.format("YYYY-MM-DD")}T${dateClassNow.end_hours}:00`);

      const day = days[moment(date).day()];
      console.log(day);
      // console.log(detailClass.training.detail, "DATE")
    
      const listFullTime = [];
      // console.log(startDate, endDate, "Format");
      // let val1 = startTime.clone();
      // let val2 = val1.clone().add("minute", 10);
      // console.log(val1, val2, "VAl 1");
      // console.log(`${val1.hours()}:${normalizeDateNumber(val1.minutes().toString())}`, `${val2.hours()}:${val2.minutes()}`, "VAl 1");
      
      // val1 = val2.clone();
      // val2 = val1.clone().add("minute", 10);
      // console.log(val1, val2, "VAl 1");
      
      // val1 = val2.clone();
      // val2 = val1.clone().add("minute", 10);
      // console.log(val1, val2, "VAl 1");
      
      // val1 = val2.clone();
      // val2 = val1.clone().add("minute", 10);
      // console.log(val1, val2, "VAl 1");

      // while (val1 < endTime) {
      //   val1 = val2.clone();
      //   val2 = val1.clone().add("minute", Number(detailClass.buffer_time || 10));
      //   console.log(`${val1.hours()}:${normalizeDateNumber(val1.minutes().toString())}`, `${val2.hours()}:${val2.minutes()}`, "VAl 1");
      // }
      // console.log(endTime)

      return detailClass.buffer_time;
    }
    
    return [];
  }, [detailClass, date]);

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