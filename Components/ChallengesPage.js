import React, {useState} from 'react';
import {Text} from 'react-native';
import {Colors} from '../Colors';
import {Avatar, Button, Card} from 'react-native-paper';
import {ScrollView} from 'react-native';

const LeftContent = props => (
  <Avatar.Icon {...props} icon="camera" color={Colors.primary} />
);

const zero_waste_img = require('../Assets/Images/svitlana-VFmDiQtkxlw-unsplash.jpg');
const bike_img = require('../Assets/Images/murillo-de-paula-o2FCfhNSjPo-unsplash.jpg');
const hack_img = require('../Assets/Images/vishnu-r-nair-1TFbqhRlCCc-unsplash.jpg');

export const ChallengesPage = ({navigation}) => {
    return (
        <ScrollView>


<Card>
          <Card.Title title="Zero waste for a week" subtitle="1000 plantey points" fontFamily="josefin-sans-regular"/>
          {/* <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
          </Card.Content> */}
          <Card.Cover source={zero_waste_img} />
          <Card.Actions>
            <Button color={Colors.accent}>Join!</Button>
            <Button color={Colors.accent}>See details</Button>
            <Text style={{position: 'absolute', right: 20}} >7 days left</Text>
          </Card.Actions>
          </Card>
          <Card>
        <Card.Title title="Commuter challenge" subtitle="500 plantey points" fontFamily="josefin-sans-regular"/>
        {/* <Card.Content>
        <Title>Card title</Title>
        <Paragraph>Card content</Paragraph>
        </Card.Content> */}
        <Card.Cover source={bike_img} />
        <Card.Actions>
        <Button color={Colors.accent}>Join!</Button>
        <Button color={Colors.accent}>See details</Button>
        <Text style={{position: 'absolute', right: 20}} >30 days left</Text>
        </Card.Actions>
        </Card>

        <Card>
        <Card.Title title="Sustainability hackathon" subtitle="3000 plantey points" fontFamily="josefin-sans-regular"/>
        {/* <Card.Content>
        <Title>Card title</Title>
        <Paragraph>Card content</Paragraph>
        </Card.Content> */}
        <Card.Cover source={hack_img} />
        <Card.Actions>
        <Button color={Colors.accent}>Join!</Button>
        <Button color={Colors.accent}>See details</Button>
        <Text style={{position: 'absolute', right: 20}} >2 days left</Text>
        </Card.Actions>
    </Card>
</ScrollView>
  );
};
