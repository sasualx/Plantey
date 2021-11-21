import React, {useState} from 'react';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {Colors} from '../Colors';
import {TaskView} from './TaskView';
import {Image, View} from 'react-native';

export const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState('2021-11-19');
  const [markedDates, setMarkedDates] = useState({
    '2021-11-14': {
      marked: true,
      dots: [{color: Colors.accent}],
    },
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
      selected: true,
    },
  });
  let tasks = {
    '2021-11-14': [{text: 'Community compost', completed: true}],
    '2021-11-17': [
      {text: 'Recycle plastic', completed: true},
      {text: 'Bike to work', completed: true},
      {text: 'Plastic free grocery shopping', completed: true},
      {text: 'Zero food waste', completed: true},
    ],
    '2021-11-18': [
      {text: 'Zero food waste', completed: true},
      {text: 'Bike to work', completed: true},
    ],
    '2021-11-19': [
      {text: 'Zero food waste', completed: true},
      {text: 'Bike to work', completed: true},
      {text: 'Plastic free grocery shopping', completed: true},
    ],
  };
  return (
    <View style={{backgroundColor: Colors.base, height: '100%'}}>
      <Calendar
        onDayPress={day => {
          if (day.dateString !== selectedDate) {
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
          }
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
      <View style={{padding: 20}}>
        <TaskView
          tasks={tasks[selectedDate]}
          disabled={true}
          onCheckboxClick={on => {}}
        />
      </View>
      <Image
        source={require('../Assets/Images/trees-graphic-cropped.png')}
        style={{width: '100%', left: 5, bottom: -130, position: 'absolute'}}
        resizeMode="contain"
      />
    </View>
  );
};
