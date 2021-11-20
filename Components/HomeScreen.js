import {Button, Image, Text, View} from 'react-native';
import * as React from 'react';
import {useState} from 'react';
import {TaskView} from './TaskView';
import ProgressBar from './ProgressBar';
import {Colors} from '../Colors';

export const HomeScreen = ({navigation}) => {
  let goal = 140;
  const [points, setPoints] = useState(60);

  const onCheckboxClick = on => {
    setPoints(on ? points + 10 : points - 10);
  };

  return (
    <View style={{padding: 20, flexDirection: 'column'}}>
      <View>
        <Text style={{color: Colors.accent, fontSize: 28, padding: 40}}>
          Good job! You already collected enough points to plant 6 trees this
          week. Can you make it to 14?
        </Text>
      </View>
      <ProgressBar points={points} goal={goal} />
      <View style={{paddingTop: 50}}>
        <TaskView
          tasks={[
            {text: 'Recycle plastic', completed: true},
            {text: 'Bike to work'},
            {text: 'Plastic free grocery shopping'},
            {text: 'Skip meat for a day'},
            {text: 'Zero Food Waste'},
          ]}
          onCheckboxClick={onCheckboxClick}
        />
      </View>
    </View>
  );
};
