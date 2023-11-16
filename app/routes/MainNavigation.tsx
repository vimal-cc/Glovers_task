import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signin from '../screens/Signin';
import Signup from '../screens/Signup';
import Forgotpasswordscreen from '../screens/Forgotpasswordscreen';
import Loginasfan from '../screens/Loginasfan';
import Splashscreen from '../screens/Splashscreen';
import Termsandconditions from '../screens/Termsandconditions';
import BottomTabNavigator from './BottomTabNavigation';
import Welcome from '../screens/Welcome';
import HomeScreen from '../screens/HomeScreen';
import LiveScreen from '../screens/LiveScreen';
import EventsScreen from '../screens/EventsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ChangePasswordScreen from '../screens/ChangePasswordScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import ContactSupportScreen from '../screens/ContactSupportScreen';
import HelpCenterScreen from '../screens/HelpCenterScreen';
import LegalScreen from '../screens/LegalScreen';
import LeagueSettingsScreen from '../screens/LeagueSettingsScreen';
const Stack = createNativeStackNavigator();
const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splashscreen}
          options={{title: '', headerShown: false}}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{title: '', headerShown: false}}
        />
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{title: '', headerShown: false}}
        />
        <Stack.Screen
          name="Forgotpassword"
          component={Forgotpasswordscreen}
          options={{title: '', headerShown: false}}
        />
        <Stack.Screen
          name="Loginasfan"
          component={Loginasfan}
          options={{title: '', headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{title: '', headerShown: false}}
        />
        <Stack.Screen
          name="TermsandConditions"
          component={Termsandconditions}
          options={{title: '', headerShown: false}}
        />
        <Stack.Screen
          name="Tab"
          component={BottomTabNavigator}
          options={{title: '', headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: '', headerShown: false}}
        />
        <Stack.Screen
          name="Live"
          component={LiveScreen}
          options={{title: '', headerShown: false}}
        />
        <Stack.Screen
          name="Events"
          component={EventsScreen}
          options={{title: '', headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{title: '', headerShown: false}}
        />
        <Stack.Screen
          name="changepassword"
          component={ChangePasswordScreen}
          options={{title: '', headerShown: false}}
        />
        <Stack.Screen
          name="Editprofile"
          component={EditProfileScreen}
          options={{title: '', headerShown: false}}
        />
        <Stack.Screen
          name="Contactsupport"
          component={ContactSupportScreen}
          options={{title: '', headerShown: false}}
        />
        <Stack.Screen
          name="Helpcenter"
          component={HelpCenterScreen}
          options={{title: '', headerShown: false}}
        />
        <Stack.Screen
          name="Legal"
          component={LegalScreen}
          options={{title: '', headerShown: false}}
        />
        <Stack.Screen
          name="Leaguesettings"
          component={LeagueSettingsScreen}
          options={{title: '', headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainNavigation;
