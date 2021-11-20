import React, {useState} from 'react';
import {Image, Text} from 'react-native';
import {Colors} from '../Colors';
import {Avatar, Button, Card} from 'react-native-paper';
import {ScrollView} from 'react-native';
import {backgroundColor} from 'react-native-calendars/src/style';

const LeftContent = props => (
  <Avatar.Icon {...props} icon="camera" color={Colors.primary} />
);

const zero_waste_img = require('../Assets/Images/svitlana-VFmDiQtkxlw-unsplash.jpg');
const bike_img = require('../Assets/Images/murillo-de-paula-o2FCfhNSjPo-unsplash.jpg');
const hack_img = require('../Assets/Images/vishnu-r-nair-1TFbqhRlCCc-unsplash.jpg');
const microsoft_img = require('../Assets/Images/microsoft.png');
const interhyp_img = require('../Assets/Images/Interhyp-black.png');
const munich_img = require('../Assets/Images/City-of-Munich-black.png');

export const ChallengesPage = ({navigation}) => {
  const LeftContentMicrosoft = props => (
    <Avatar.Icon
      {...props}
      style={{
        tintColor: 'rgba(52, 52, 52, alpha)',
        backgroundColor: 'blue',
      }}
      icon={microsoft_img}
    />
  );
  const LeftContentInterhyp = props => (
    <Avatar.Icon
      {...props}
      style={{
        tintColor: 'rgba(52, 52, 52, alpha)',
        backgroundColor: 'orange',
      }}
      icon={interhyp_img}
    />
  );
  const LeftContentMunich = props => (
    <Avatar.Icon
      {...props}
      style={{
        tintColor: 'rgba(52, 52, 52, alpha)',
        backgroundColor: 'black',
      }}
      icon={munich_img}
    />
  );
  return (
    <ScrollView>
      <Card>
        <Card.Title
          title="Zero waste for a week"
          subtitle="1000 plantey points"
          fontFamily="Euphemia UCAS Regular 2.6.6"
          left={LeftContentInterhyp}
        />
        <Card.Cover source={zero_waste_img} />
        <Card.Actions>
          <Button color={Colors.accent}>Join!</Button>
          <Button color={Colors.accent}>See details</Button>
          <Text
            style={{
              position: 'absolute',
              right: 20,
              fontFamily: 'Euphemia UCAS Regular 2.6.6',
            }}>
            7 days left
          </Text>
        </Card.Actions>
      </Card>
      <Card>
        <Card.Title
          title="Commuter challenge"
          subtitle="500 plantey points"
          fontFamily="Euphemia UCAS Regular 2.6.6"
          left={LeftContentMunich}
        />
        {/* <Card.Content>
        <Title>Card title</Title>
        <Paragraph>Card content</Paragraph>
        </Card.Content> */}
        <Card.Cover source={bike_img} />
        <Card.Actions>
          <Button color={Colors.accent}>Join!</Button>
          <Button color={Colors.accent}>See details</Button>
          <Text
            style={{
              position: 'absolute',
              right: 20,
              fontFamily: 'Euphemia UCAS Regular 2.6.6',
            }}>
            30 days left
          </Text>
        </Card.Actions>
      </Card>

      <Card>
        <Card.Title
          title="Sustainability hackathon"
          subtitle="3000 plantey points"
          fontFamily="Euphemia UCAS Regular 2.6.6"
          left={LeftContentMicrosoft}
        />
        {/* <Card.Content>
        <Title>Card title</Title>
        <Paragraph>Card content</Paragraph>
        </Card.Content> */}
        <Card.Cover source={hack_img} />
        <Card.Actions>
          <Button color={Colors.accent}>Join!</Button>
          <Button color={Colors.accent}>See details</Button>
          <Text
            style={{
              position: 'absolute',
              right: 20,
              fontFamily: 'Euphemia UCAS Regular 2.6.6',
            }}>
            2 days left
          </Text>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
};
