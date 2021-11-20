import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Text, View, TouchableOpacity} from 'react-native';
import {HomeScreen} from './Components';
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

// import 'react-native-gesture-handler';
// import {createStackNavigator} from '@react-navigation/stack';

const Tab = createBottomTabNavigator();

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      {/*<Stack.Navigator*/}
      {/*  initialRouteName="Home"*/}
      {/*  screenOptions={{*/}
      {/*    headerMode: 'screen',*/}
      {/*    headerTintColor: Colors.accent,*/}
      {/*    headerStyle: {backgroundColor: Colors.primary},*/}
      {/*  }}>*/}
      {/*  <Stack.Screen*/}
      {/*    name="Home"*/}
      {/*    component={HomeScreen}*/}
      {/*    options={{*/}
      {/*      title: 'plantey',*/}
      {/*      style: {*/}
      {/*        backgroundColor: Colors.primary,*/}
      {/*      },*/}
      {/*    }}*/}
      {/*  />*/}
      {/*  <Stack.Screen name="Profile" component={ProfileScreen} />*/}
      {/*</Stack.Navigator>*/}

      <Tab.Navigator
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
          tabBarInactiveTintColor: Colors.primary,
          tabBarActiveBackgroundColor: Colors.secondary,
        })}>
        <Tab.Screen name="Forum" component={HomeScreen} />
        <Tab.Screen name="Record" component={HomeScreen} />
        <Tab.Screen
          name="Tasks"
          component={HomeScreen}
          options={{
            tabBarBadge: 3,
            tabBarBadgeStyle: {backgroundColor: Colors.base},
          }}
        />
        <Tab.Screen name="Challenges" component={SettingsScreen} />
        <Tab.Screen name="Statistics" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
