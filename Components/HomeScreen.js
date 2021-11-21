import {Button, Image, ScrollView, Text, View} from 'react-native';
import * as React from 'react';
import {useState} from 'react';
import {TaskView} from './TaskView';
import ProgressBar from './ProgressBar';
import {Colors} from '../Colors';

export const HomeScreen = ({navigation}) => {
  let goal = 1400;
  const [points, setPoints] = useState(600);

  const onCheckboxClick = on => {
    setPoints(on ? points + 100 : points - 100);
  };

  return (
    <View
      style={{
        padding: 20,
        flexDirection: 'column',
        backgroundColor: Colors.base,
      }}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            color: Colors.accent,
            fontSize: 28,
            padding: 40,
            fontFamily: 'Euphemia UCAS Regular 2.6.6 Regular 2.6.6',
          }}>
          Awesome, one tree has been planted for you this week. Keep it up!
        </Text>
      </View>
      <ProgressBar points={points} goal={goal} />
      <View style={{paddingTop: 50}}>
        <TaskView
          tasks={[
            {text: 'Bike to work', completed: true},
            {text: 'Plastic free grocery shopping'},
            {text: 'Skip meat for a day'},
            {text: 'Zero Food Waste'},
          ]}
          onCheckboxClick={onCheckboxClick}
        />
      </View>
      <Image
        source={require('../Assets/Images/trees-graphic-cropped.png')}
        style={{width: '110%', left: -15, bottom: -18}}
        resizeMode="contain"
      />
    </View>
  );
};
