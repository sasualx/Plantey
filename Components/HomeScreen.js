import {Button, Image, View} from 'react-native';
import * as React from 'react';
import {useState} from 'react';
import {TaskView} from './TaskView';
import ProgressBar from './ProgressBar';

export const HomeScreen = ({navigation}) => {
  let goal = 140;
  const [points, setPoints] = useState(60);

  const onCheckboxClick = on => {
    setPoints(on ? points + 10 : points - 10);
  };

  return (
    <View style={{padding: 20, flexDirection: 'column'}}>
      <View style={{height: '25%'}} />
      <ProgressBar points={points} goal={goal} />
      <View style={{paddingTop: 50}}>
        <TaskView
          tasks={[
            {text: 'Recycle plastic', completed: true},
            {text: 'Bike to work'},
            {text: 'Plastic free grocery shopping'},
            {text: 'Skip meat for a day'},
          ]}
          onCheckboxClick={onCheckboxClick}
        />
      </View>
    </View>
  );
};
