import React, { forwardRef, useState, useCallback, useRef } from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

import styles from "./styles";
import theme from "Theme";
import ButtonTag from "Components/ButtonTag";
import CustomBottomSheet from "Components/CustomBottomSheet";
import { FilterGetAllClass } from "Types/class";

interface FilterBottomSheetProps {
  category: string;
  onConfirm(filterBy: FilterGetAllClass): void;
  type: string;
}

interface FilterBottomSheetHandle {
  close(): void;
  open(): void;
  statusBottomSheet: number;
}

type BottomSheetHandle = React.ElementRef<typeof CustomBottomSheet>;

const FilterBottomSheet = forwardRef<FilterBottomSheetHandle, FilterBottomSheetProps>(({ onConfirm, category, type }, ref) => {
  const _category = useSelector((state: AppStore.AppState) => state.category);
  const _type = useSelector((state: AppStore.AppState) => state.type);
  const bottomSheetRef = useRef<BottomSheetHandle>(null);
  const [tempCategory, setTempCategory] = useState("All");
  const [tempType, setTempType] = useState("All");
  const { categoryList = [] } = _category;
  const { typeList = [] } = _type;

  const _onCancelFilter = useCallback(() => {
    setTempCategory(category);
    setTempType(type);

    bottomSheetRef.current?.close();
  }, [ref]);

  const _onChangeCategory = useCallback((newCategory: string) => {
    setTempCategory(newCategory)
  }, []);

  const _onChangeType = useCallback((newType: string) => {
    setTempType(newType)
  }, []);

  const _onConfirmFilter = useCallback(() => {
    const filterBy: FilterGetAllClass = {};
    filterBy.category = tempCategory;
    filterBy.types = tempType;

    onConfirm(filterBy);

    bottomSheetRef.current?.close();
  }, [tempCategory, tempType]);

  React.useImperativeHandle(ref, () => ({
    close: () => {
      bottomSheetRef.current?.close();
    },
    open: () => {
      bottomSheetRef.current?.expand();
    },
    statusBottomSheet: bottomSheetRef.current?.status || -1
  }));

  return (
    <CustomBottomSheet
      ref={bottomSheetRef}
    >
      <View style={[styles.wrapper, styles.bottomsheetContainer]}>
        <Text style={styles.filterTitle}>Filter</Text>
        <View style={styles.programSection}>
          <Text style={theme.styles.textTitle}>Select Type</Text>
          <View style={styles.programList}>
            <ButtonTag
              title="All"
              type="transparent"
              style={styles.programButton}
              onPress={() =>_onChangeType("All")}
              active={tempType === "All"}
            />
            {typeList.map((item) => (
              <ButtonTag 
                key={item.id}
                title={item.name}
                type="transparent"
                style={styles.programButton}
                onPress={() =>_onChangeType(item.name)}
                active={tempType === item.name}
              />
            ))}
          </View>
        </View>
        <View style={styles.classSection}>
          <Text style={theme.styles.textTitle}>Select Category</Text>
          <View style={styles.classList}>
            <ButtonTag 
              active={tempCategory === "All"}
              onPress={() => _onChangeCategory("All")}
              style={styles.classButton}
              title="All"
              type="transparent"
            />
            {categoryList.map((item) => {
              return (
                <ButtonTag
                  active={tempCategory === item.name}
                  key={item.id}
                  onPress={() => _onChangeCategory(item.name)}
                  style={styles.classButton}
                  title={item.name}
                  type="transparent"
                />
              )
            })}
          </View>
        </View>
        <View style={styles.buttonsSection}>
          <ButtonTag 
            title="Cancel"
            type="primary"
            size="lg"
            onPress={_onCancelFilter}
            style={{ marginRight: 5 }}
          />
          <ButtonTag 
            title="Confirm"
            type="primary"
            size="lg"
            onPress={_onConfirmFilter}
            style={{ marginLeft: 5 }}
          />
        </View>
      </View>
    </CustomBottomSheet>
  );
});

export default React.memo(FilterBottomSheet);