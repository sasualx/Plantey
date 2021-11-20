import React, {useState} from 'react';
// import { StatusBar } from "expo-status-bar";
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {Colors} from '../Colors';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import {
  faSeedling,
  faTrophy,
  faCommentDots,
  faTree,
  faLeaf,
  faHome,
  faUser,
  faCalendarDay,
} from '@fortawesome/free-solid-svg-icons';

// const LeftContent = props => <Avatar.Icon {...props} icon="camera" color={Colors.primary} />

const staticImage = require('../Assets/Images/svitlana-VFmDiQtkxlw-unsplash.jpg');

export const ChallengesPage = ({navigation}) => {
    return (
        <Card>
          <Card.Title title="Zero waste for a week" subtitle="100 plantey points" fontFamily="josefin-sans-regular"/>
          {/* <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
          </Card.Content> */}
          <Card.Cover source={staticImage} />
          <Card.Actions>
            <Button color={Colors.accent}>Join!</Button>
            <Button color={Colors.accent}>See details</Button>
            <Text style={{position: 'absolute', right: 20}} >20 days left</Text>
          </Card.Actions>
        </Card>
    );
};



