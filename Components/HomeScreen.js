import {Button, View} from 'react-native';
import * as React from 'react';
import {Colors} from '../Colors';
import {TaskView} from './TaskView';

export const HomeScreen = ({navigation}) => {
  return (
    <View style={{padding: 20, flexDirection: 'column'}}>
      <View style={{height: '50%'}} />
      <View>
        <TaskView
          tasks={[{text: 'Recycle plastic', completed: false}]}
          disabled={false}
        />
      </View>
    </View>
  );
};
