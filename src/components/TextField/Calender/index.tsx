import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Text, View } from "react-native";
import moment from "moment";
import { Calendar, CalendarProps, DateData } from "react-native-calendars";

import theme from "Theme";
import Day from "./Day";

const Calender = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [disabledDays, setDisabledDays] = useState<{[key: string]: any}>({});
  const [dateMonth, setDateMonth] = useState<number>(moment().month());

  const checkDay = (label: string = "", date: (string & DateData) | undefined): boolean => {
    if (label.split(" ")[1] === "Sunday" || date?.month) {
      return true;
    }

    return false;
  }

  const getDaysInMonths = (month: number, year: number, daysIndexes: number[] = [7]) => {
    let pivot = moment().month(month).year(year).startOf("month");
    const end = moment().month(month).year(year).endOf("month");
    let dates: {[key: string]: any} = {};
    const disabled = { disabled: true, disableTouchEvent: true };
    while (pivot.isBefore(end)) {
      daysIndexes.forEach((day) => {
        const copy = moment(pivot);
        dates[copy.day(day).format("YYYY-MM-DD")] = disabled;
      });
      pivot.add(7, "days");
    }
    setDisabledDays(dates);
  }

  useEffect(() => {
    getDaysInMonths(moment().month(), moment().year());
  }, []);

  const onDayPress: CalendarProps["onDayPress"] = useCallback(day => {
    setSelected(day.dateString);
  }, []);

  return (
    <Calendar
      minDate="2022-03-28"
      onDayPress={onDayPress}
      enableSwipeMonths
      // hideExtraDays
      dayComponent={({ accessibilityLabel, date, state }) => {
        const isDisabled = checkDay(accessibilityLabel, date);

        return (
          <Day 
            date={date}
            active={false}
            disabled={isDisabled}
            onPress={() => {}}
          />
        );
      }}
      theme={{
        arrowColor: theme.colors.green,
        todayTextColor: theme.colors.black,
        textColor: theme.colors.black,
        selectedDayBackgroundColor: theme.colors.green,
        selectedDayTextColor: theme.colors.white,
      }}
      style={{ 
        marginVertical: 15,
        borderRadius: 15,
        overflow: "hidden"
      }}
      onMonthChange={(date) => {
        console.log(date, "CHANGE")
        getDaysInMonths(date.month - 1, date.year);
      }}
      // markedDates={disabledDays}
      // markedDates={{...disabledDays, ...marked}}
    />
  )
}

export default Calender;