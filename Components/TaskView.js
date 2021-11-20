import React, {useState} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {FlatList, Text, View} from 'react-native';
import {Colors} from '../Colors';

const Task = ({text, completed = false, disabled = false, onCheckboxClick}) => {
  console.log(text);
  return (
    <View
      style={{
        color: Colors.primary,
        flexDirection: 'row',
        paddingBottom: 10,
      }}>
      <BouncyCheckbox
        isChecked={completed}
        fillColor={Colors.accent}
        unfillColor={Colors.base}
        disableBuiltInState={disabled}
        onPress={(isChecked: boolean) => {
          if (isChecked) {
            onCheckboxClick(true);
          } else {
            onCheckboxClick(false);
          }
        }}
      />
      <Text
        style={{
          color: Colors.accent,
          fontSize: 20,
          fontFamily: 'Euphemia UCAS Regular 2.6.6',
        }}>
        {text}
      </Text>
    </View>
  );
};

export const TaskView = ({tasks, disabled, onCheckboxClick}) => {
  const renderItem = ({item}) => (
    <View>
      <Task
        text={item.text}
        completed={item.completed}
        disabled={disabled}
        onCheckboxClick={onCheckboxClick}
      />
    </View>
  );

  return <FlatList data={tasks} renderItem={renderItem} />;
};
