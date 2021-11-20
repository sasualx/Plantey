import {Button, View} from 'react-native';
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
      <ProgressBar points={points} goal={goal} />
      <View style={{paddingTop: 50}}>
        <TaskView
          tasks={[
            {text: 'Recycle plastic', completed: true},
            {text: 'Took the bike to work'},
            {text: 'Bought food in zero-waste packaging'},
            {text: 'Skip meat for a day'},
          ]}
          onCheckboxClick={onCheckboxClick}
        />
      </View>
    </View>
  );
};
