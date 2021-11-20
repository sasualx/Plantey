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
        console.log(markedDates[day.dateString]);
        setMarkedDates({
          ...markedDates,
          selectedDate: {
            ...markedDates[selectedDate],
            selected: false,
          },
          day: {
            ...markedDates[day.dateString],
            selected: true,
          },
        });
        setSelectedDate(day);
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
