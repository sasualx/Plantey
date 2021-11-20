import React, {useState} from 'react';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {Colors} from '../Colors';

export const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState('2021-11-20');
  const [markedDates, setMarkedDates] = useState({
    '2021-11-17': {
      marked: true,
      dots: [
        {color: Colors.accent},
        {color: Colors.accent},
        {color: Colors.accent},
        {color: Colors.accent},
      ],
    },
    '2021-11-18': {
      marked: true,
      dots: [{color: Colors.accent}, {color: Colors.accent}],
    },
    '2021-11-19': {
      marked: true,
      dots: [
        {color: Colors.accent},
        {color: Colors.accent},
        {color: Colors.accent},
      ],
    },
    '2021-11-20': {
      selected: true,
    },
  });
  return (
    <Calendar
      onDayPress={day => {
        console.log('selected day', day);
        console.log(markedDates);
        markedDates[day.dateString] = {
          ...markedDates[day.dateString],
          selected: true,
        };
        setMarkedDates(
          Object.fromEntries(
            Object.keys(markedDates).map(function (key) {
              return [
                key,
                key === selectedDate
                  ? {
                      ...markedDates[key],
                      selected: false,
                    }
                  : key === day.dateString
                  ? {
                      ...markedDates[key],
                      selected: true,
                    }
                  : markedDates[key],
              ];
            }),
          ),
        );
        setSelectedDate(day.dateString);
      }}
      markingType={'multi-dot'}
      markedDates={markedDates}
      theme={{
        arrowColor: Colors.primary,
        selectedDayTextColor: Colors.accent,
        selectedDayBackgroundColor: Colors.primary,
        todayTextColor: Colors.accent,
      }}
    />
  );
};
