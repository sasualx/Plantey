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
        paddingBottom: 10,
      }}>
      <BouncyCheckbox
        isChecked={completed}
        fillColor={Colors.accent}
        disableBuiltInState={disabled}
      />
      <Text style={{color: Colors.accent, fontWeight: 'bold', fontSize: 20}}>
        {text}
      </Text>
    </View>
  );
};

export const TaskView = ({tasks, disabled}) => {
  const renderItem = ({item}) => (
    <View>
      <Task text={item.text} completed={item.completed} disabled={disabled} />
    </View>
  );

  return <FlatList data={tasks} renderItem={renderItem} />;
};
