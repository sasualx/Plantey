import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Animated} from 'react-native';
import {Colors} from '../Colors';
const ProgressBar = ({points, goal}) => {
  let value = (points / goal) * 100;

  return (
    <View style={progressStyles.containerStyle}>
      <View style={[progressStyles.innerStyle, {width: value + '%'}]} />
      <Text
        style={{
          ...progressStyles.label,
          fontFamily: 'Euphemia UCAS Regular 2.6.6',
        }}>
        {points + '/' + goal}
      </Text>
    </View>
  );
};
//basic styles for creation of progress bar
const progressStyles = StyleSheet.create({
  containerStyle: {
    width: '100%',
    height: 40,
    padding: 0,
    borderColor: Colors.base,
    borderWidth: 3,
    borderRadius: 30,
    marginTop: 0,
    justifyContent: 'center',
    backgroundColor: Colors.primary,
  },
  innerStyle: {
    width: '100%',
    height: 34,
    borderRadius: 30,
    left: -3,
    backgroundColor: Colors.secondary,
  },
  label: {
    fontSize: 24,
    color: Colors.accent,
    position: 'absolute',
    zIndex: 1,
    alignSelf: 'center',
  },
});

export default ProgressBar;
