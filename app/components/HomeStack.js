import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/HomeScreen';
import Quiz from '../screens/QuizScreen';
import Rank from '../screens/RankingScreen';
import NavigationBar from '../components/NavigationBar'

const Stack = createStackNavigator();

export default function () {
    return (
        <>
            <Stack.Navigator headerMode="none" >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Quiz" component={Quiz} />
                <Stack.Screen name="Rank" component={Rank} />
            </Stack.Navigator>
            <NavigationBar />
        </>
    );
}
