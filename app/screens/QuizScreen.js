import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Start from './Quiz/QuizStartScreen'
import Game from './Quiz/QuizGameScreen'
import End from './Quiz/QuizEndScreen'

const Stack = createStackNavigator();

export default function Quiz(props) {
  return (
    <Stack.Navigator headerMode="none" >
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="Game" component={Game} />
      <Stack.Screen name="End" component={End} />
    </Stack.Navigator>
  )
}