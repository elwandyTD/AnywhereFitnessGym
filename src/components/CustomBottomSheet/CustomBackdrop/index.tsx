import React from "react";
import { BottomSheetBackdrop, BottomSheetBackdropProps } from "@gorhom/bottom-sheet";

interface CustomBackdropProps extends BottomSheetBackdropProps {
  disappearsOnIndex?: number;
  appearsOnIndex?: number;
}

const CustomBackdrop = ({ animatedIndex, style, animatedPosition, disappearsOnIndex = -1, appearsOnIndex = 0 }: CustomBackdropProps) => {
  return (
    <BottomSheetBackdrop
      animatedIndex={animatedIndex}
      animatedPosition={animatedPosition}
      appearsOnIndex={appearsOnIndex}
      disappearsOnIndex={disappearsOnIndex}
      enableTouchThrough={true}

      style={[style]}
    />
  )
};

export default CustomBackdrop;