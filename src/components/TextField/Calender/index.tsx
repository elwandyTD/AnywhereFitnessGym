import React, { useCallback, useEffect, useMemo } from "react";
import moment from "moment";
import { Calendar, DateData } from "react-native-calendars";

import theme from "Theme";
import Day from "./Day";
import { View } from "react-native";
interface CalenderProps {
  valueDate: string | null;
  onChangeDay(date: string): void;
}

const Calender = ({ onChangeDay, valueDate }: CalenderProps) => {
  const generateTodayDate = useMemo(() => {
    return moment().format("YYYY-MM-DD");
  }, []);

  const checkDay = useCallback((label: string = "", date: (string & DateData) | undefined): boolean => {
    if ((label.split(" ")[1] === "Sunday") || ((date?.dateString || "") < generateTodayDate)) {
      return true;
    }

    return false;
  }, []);

  const getDaysInMonths = useCallback((month: number, year: number, daysIndexes: number[] = [7]) => {
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
  }, []);

  useEffect(() => {
    getDaysInMonths(moment().month(), moment().year());
  }, []);

  return (
    <Calendar
      minDate={generateTodayDate}
      enableSwipeMonths
      hideExtraDays
      dayComponent={({ accessibilityLabel, date, state }) => {
        const isDisabled = checkDay(accessibilityLabel, date);

        return (
          <Day 
            date={date}
            active={valueDate === (date?.dateString || "")}
            disabled={isDisabled}
            onPress={onChangeDay}
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
        getDaysInMonths(date.month - 1, date.year);
      }}
    />
  )
}

export default Calender;