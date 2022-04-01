import React, { useCallback, useState } from "react";
import { Text, View } from "react-native";
import FAIcon from "react-native-vector-icons/FontAwesome";

import styles from "./styles";
import OpenTimeListItem from "./OpenTimeListItem";
import ScalingPressable from "App/components/Animated/ScalingPressable";
import Animated from "react-native-reanimated";

const OpenTimeList = () => {
  // const listDay = ["sunday"];
  const fullListDay = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  const [listDay, setListDay] = useState(["sunday"]);
  const [isOpenArrow, setIsOpenArrow] = useState(false);

  const _onPressArrow = useCallback(() => {
    if (isOpenArrow) {
      // setListDay(listDay.splice(0, 1))
      const newList = JSON.parse(JSON.stringify(listDay));
      for (let i = 0; i < fullListDay.length; i++) {
        newList.pop()
        console.log(newList)
        setListDay(newList);
      }
      setIsOpenArrow(false);
    } else {
      setListDay([...listDay, ...fullListDay]);
      setIsOpenArrow(true);
    }
  }, [isOpenArrow, listDay, fullListDay]);

  return (
    <Animated.View style={styles.container}>
      {listDay.map((day, i) => {
        return (
          <OpenTimeListItem key={i} days={day} startHours={"09:00"} endHours={"23:00"} index={i} />
        );
      })}
      <ScalingPressable
        style={styles.btnArrow}
        onPress={_onPressArrow}
      >
        <FAIcon 
          name="chevron-down" 
          style={styles.iconArrow}
        />
      </ScalingPressable>
    </Animated.View>
  )
}

export default React.memo(OpenTimeList)