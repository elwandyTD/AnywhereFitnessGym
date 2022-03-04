import React, { forwardRef, useCallback, useMemo } from 'react';
import BottomSheet, { BottomSheetBackdropProps, BottomSheetProps } from '@gorhom/bottom-sheet';
import Animated from 'react-native-reanimated';

import CustomBackdrop from './CustomBackdrop';

interface CustomBottomSheetProps {
  snapPoints?: (string | number)[];
  children: React.ReactNode;
}

// type CustomBottomSheetProps = BottomSheetProps & {
//   snapPoints?: (string | number)[] | Animated.SharedValue<(string | number)[]>;
// }

const CustomBottomSheet = forwardRef<BottomSheet, CustomBottomSheetProps>(
  (props, ref) => {
    const { children } = props;

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

    return (
      <BottomSheet 
        ref={ref}
        snapPoints={snapPoints}
        backdropComponent={renderCustomBackdrop}
        enablePanDownToClose={true}
        index={-1}
      >
        {children}
      </BottomSheet>
    )
  }
);

export default CustomBottomSheet;