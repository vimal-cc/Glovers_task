import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import LiveScreen from '../screens/LiveScreen';
import EventsScreen from '../screens/EventsScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const tabIcons = {
  Home: {
    active: require('../assets/images/home_active.png'),
    inactive: require('../assets/images/homeInactive.png'),
  },
  Events: {
    active: require('../assets/images/eventsActive.png'),
    inactive: require('../assets/images/Events_inactive.png'),
  },
  Live: {
    active: require('../assets/images/liveActive.png'),
    inactive: require('../assets/images/liveInActive.png'),
  },
  Profile: {
    active: require('../assets/images/profileActive.png'),
    inactive: require('../assets/images/profile_inactive.png'),
  },
};

const BottomTabNavigator = () => {
  return (
    
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarStyle: {
            backgroundColor: 'white',
            height: 60,
            borderTopWidth: 0.5,
            borderTopColor: '#cccccc',
            paddingVertical: 5,
          },
          tabBarLabelStyle: {
            fontSize: 15,
            paddingVertical: 5,
          },
          tabBarIcon: ({focused, color, size}) => {
            const {name} = route;
            const {active, inactive} = tabIcons[name];
            const iconSource = focused ? active : inactive;

            return (
              <Image
                source={iconSource}
                style={{tintColor: color, width: size, height: size}}
              />
            );
          },
          tabBarActiveTintColor: '#005dab',
          tabBarInactiveTintColor: 'grey',
        })}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Home', headerShown: false}}
        />
        <Tab.Screen
          name="Events"
          component={EventsScreen}
          options={{title: 'Events', headerShown: false}}
        />
        <Tab.Screen
          name="Live"
          component={LiveScreen}
          options={{title: 'Live', headerShown: false}}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{title: 'Profile', headerShown: false}}
        />
      </Tab.Navigator>
   
  );
};

export default BottomTabNavigator;
