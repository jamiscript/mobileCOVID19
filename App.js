import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './app/screens/LoginScreen';
import Missions from './app/screens/MissionsScreen';
import Quiz from './app/screens/QuizScreen';
import Rank from './app/screens/RankScreen';
import Registration from './app/screens/RegistrationScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Missions" component={Missions} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="Rank" component={Rank} />
        <Stack.Screen name="Registration" component={Registration} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
