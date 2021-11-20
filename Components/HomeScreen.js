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
    <View
      style={{
        padding: 20,
        flexDirection: 'column',
        backgroundColor: Colors.base,
      }}>
      <View>
        <Text
          style={{color: Colors.accent, fontSize: 28, padding: 40, left: 15}}>
          6 trees planted this week. Keep it up!
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
      <Image
        source={require('../Assets/Images/trees-graphic-cropped.png')}
        style={{width: '110%', left: -15, bottom: 20}}
        resizeMode="contain"
      />
    </View>
  );
};
