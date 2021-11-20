import React, {useState} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {FlatList, Text, View} from 'react-native';
import {Colors} from '../Colors';

const Task = ({text, completed = false, disabled = false}) => {
  console.log(text);
  return (
    <View
      style={{
        color: Colors.primary,
        flexDirection: 'row',
      }}>
      <BouncyCheckbox
        completed={completed}
        fillColor={Colors.accent}
        disableBuiltInState={disabled}
      />
      <Text style={{color: Colors.accent}}>{text}</Text>
    </View>
  );
};

export const TaskView = ({tasks, disabled}) => {
  return (
    <FlatList
      data={tasks}
      renderItem={item => {
        return (
          <View>
            <Task
              text={item.text}
              completed={item.completed}
              disabled={disabled}
            />
          </View>
        );
      }}
    />
  );
};
