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
      <View style={{height: '25%'}}>
        {/*<Image
          style={{
            position: 'absolute',
            zIndex: -1,
            opacity: 0.8,
            height: 1200,
            left: -200,
            top: -470,
          }}
          resizeMode="stretch"
          source={require('../Assets/Images/valentin-salja-Z3oT1r3Pq0Y-unsplash.jpg')}
        />*/}
      </View>
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
