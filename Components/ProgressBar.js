import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Animated} from 'react-native';
import {Colors} from '../Colors';
const ProgressBar = ({points, goal}) => {
  let value = (points / goal) * 100;

  return (
    <View style={progressStyles.containerStyle}>
      <View style={[progressStyles.innerStyle, {width: value + '%'}]} />
      <Text style={progressStyles.label}>{points + '/' + goal}</Text>
    </View>
  );
};
//basic styles for creation of progress bar
const progressStyles = StyleSheet.create({
  containerStyle: {
    width: '100%',
    height: 40,
    padding: 0,
    borderColor: Colors.primary,
    borderWidth: 3,
    borderRadius: 30,
    marginTop: 200,
    justifyContent: 'center',
  },
  innerStyle: {
    width: '100%',
    height: 40,
    borderRadius: 30,
    backgroundColor: Colors.primary,
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
