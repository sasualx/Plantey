import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {CalendarPage, HomeScreen, ChallengesPage} from './Components';
import {Colors as Color, Colors} from './Colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
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
import house from './Assets/Images/house.png';

const Tab = createBottomTabNavigator();

function StatsScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: Colors.primary,
      }}>
      <Image
        source={require('./Assets/Images/overall-stats.png')}
        resizeMode={'contain'}
        style={{width: '100%'}}
      />
    </View>
  );
}

function ForumScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: Colors.base,
      }}>
      <Text
        style={{
          color: Colors.accent,
          fontFamily: 'Euphemia UCAS Regular 2.6.6',
        }}>
        Expect exciting community initiatives about sustainability!
      </Text>
    </View>
  );
}

const App = () => {
  const user = require('./Assets/Images/user.png');
  const house = require('./Assets/Images/wallless-house.png');
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Tasks"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Forum') {
              return (
                <FontAwesomeIcon
                  icon={faCommentDots}
                  color={Colors.accent}
                  size={size}
                />
              );
            } else if (route.name === 'Record') {
              return (
                <FontAwesomeIcon
                  icon={faCalendarDay}
                  color={Colors.accent}
                  size={size}
                />
              );
            } else if (route.name === 'Tasks') {
              return (
                <FontAwesomeIcon
                  icon={faSeedling}
                  color={Colors.accent}
                  size={size}
                />
              );
            } else if (route.name === 'Challenges') {
              return (
                <FontAwesomeIcon
                  icon={faTrophy}
                  color={Colors.accent}
                  size={size}
                />
              );
            } else if (route.name === 'Statistics') {
              return (
                <FontAwesomeIcon
                  icon={faTree}
                  color={Colors.accent}
                  size={size}
                />
              );
            }

            // You can return any component that you like here!
            return (
              <FontAwesomeIcon
                icon={faLeaf}
                color={Colors.accent}
                size={size}
              />
            );
          },
          tabBarActiveTintColor: Color.accent,
          tabBarInactiveTintColor: Colors.accent,
          tabBarActiveBackgroundColor: Colors.secondary,
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Lemon Tuesday',
            fontSize: 30,
            color: Colors.accent,
          },
          headerTitle: ({allowFontScaling, tintColor, style, children}) => {
            return <Text style={{...style}}>Plantey</Text>;
          },
          headerLeft: () => (
            <Image
              resizeMode="contain"
              style={{position: 'absolute', width: 40, left: 10}}
              source={house}
            />
          ),
          headerRight: () => (
            <Image
              resizeMode="contain"
              style={{position: 'absolute', width: 40, right: 5}}
              source={user}
            />
          ),
        })}>
        <Tab.Screen name="Forum" component={ForumScreen} />
        <Tab.Screen name="Record" component={CalendarPage} />
        <Tab.Screen
          name="Tasks"
          component={HomeScreen}
          options={{
            tabBarBadge: 4,
            tabBarBadgeStyle: {backgroundColor: Colors.base},
          }}
        />
        <Tab.Screen name="Challenges" component={ChallengesPage} />
        <Tab.Screen name="Statistics" component={StatsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
