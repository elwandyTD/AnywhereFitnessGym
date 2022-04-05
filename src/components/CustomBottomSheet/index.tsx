import React, { forwardRef, useCallback, useMemo, useState } from 'react';
import BottomSheet, { BottomSheetBackdropProps } from '@gorhom/bottom-sheet';
import { BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CustomBackdrop from './CustomBackdrop';

interface CustomBottomSheetProps {
  children: React.ReactNode;
  onChange?(index: number): void;
  snapPoints?: (string | number)[];
}

interface CustomBottomSheetHandle {
  expand(): void;
  close(): void;
  status: number;
}

const CustomBottomSheet = forwardRef<CustomBottomSheetHandle, CustomBottomSheetProps>(
  (props, ref) => {
    const bottomSheetRef = React.useRef<BottomSheet>(null);
    const navigation = useNavigation();
    const [statusBottomsheet, setStatusBottomsheet] = useState<number>(-1);
    const { children, onChange } = props;

    React.useImperativeHandle(ref, () => ({
      close: () => {
        bottomSheetRef.current?.close();
      },
      expand: () => {
        bottomSheetRef.current?.expand();
      },
      status: statusBottomsheet
    }));

    const snapPoints = useMemo(() => {
      if (props.snapPoints) {
        return props.snapPoints
      }

      return ["90%"];
    }, []);

    const renderCustomBackdrop: React.FC<BottomSheetBackdropProps> = useCallback((props) => {
      return (
        <CustomBackdrop 
          {...props} 
        />
      );
    }, []);

    React.useEffect(() => {
      const backAction = () => {
        if (statusBottomsheet < 0) {
          return false;
        }

        bottomSheetRef.current?.close();
        return true
      };
  
      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
      );
  
      return () => {
        backHandler.remove();
      }
    }, [statusBottomsheet, navigation.canGoBack]);

    return (
      <BottomSheet 
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        backdropComponent={renderCustomBackdrop}
        enablePanDownToClose={true}
        onChange={setStatusBottomsheet}
        index={-1}
      >
        {children}
      </BottomSheet>
    )
  }
);

export default CustomBottomSheet;