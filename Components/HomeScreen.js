import {Button, View} from 'react-native';
import * as React from 'react';
import {Colors} from '../Colors';
import {TaskView} from './TaskView';

export const HomeScreen = ({navigation}) => {
  return (
    <View style={{padding: 20, flexDirection: 'column'}}>
      <View style={{height: '55%'}} />
      <View>
        <TaskView
          tasks={[
            {text: 'Recycle plastic', completed: true},
            {text: 'Took the bike to work'},
            {text: 'Bought food in zero-waste packaging'},
          ]}
        />
      </View>
    </View>
  );
};
