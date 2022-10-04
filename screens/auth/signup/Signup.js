import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Username from './Username';
import Password from './password';
import Email from './email';

const Stack = createNativeStackNavigator();

const Signup = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
      }}>
      <Stack.Screen
        name="username"
        component={Username}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="password"
        component={Password}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="email"
        component={Email}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Signup;
