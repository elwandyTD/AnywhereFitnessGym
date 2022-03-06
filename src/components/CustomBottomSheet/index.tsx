import React, { forwardRef, useCallback, useMemo } from 'react';
import BottomSheet, { BottomSheetBackdropProps } from '@gorhom/bottom-sheet';

import CustomBackdrop from './CustomBackdrop';

interface CustomBottomSheetProps {
  snapPoints?: (string | number)[];
  children: React.ReactNode;
}

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