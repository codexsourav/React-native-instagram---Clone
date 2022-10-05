import * as React from 'react';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './HomePage';
import Login from './screens/auth/Login';
import Signup from './screens/auth/signup/Signup';
import Verify from './screens/auth/verify';
import Splash from './Splash';
import Activity from './activity/Activity';

const Stack = createNativeStackNavigator();

export const navRef = createNavigationContainerRef();

const App = () => {
  return (
    <NavigationContainer ref={navRef}>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Verify"
          component={Verify}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Activity"
          component={Activity}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
