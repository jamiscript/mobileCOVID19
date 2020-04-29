import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './app/screens/LoginScreen';
import Missions from './app/screens/MissionsScreen';
import Quiz from './app/screens/Quiz';
import Rank from './app/screens/ScreenRanking';

const Stack = createStackNavigator();

export default function () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Missions" component={Missions} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="Rank" component={Rank} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
