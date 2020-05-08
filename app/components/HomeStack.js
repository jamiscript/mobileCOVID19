import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Missions from '../screens/MissionsScreen';
import Quiz from '../screens/QuizScreen';
import Rank from '../screens/RankScreen';
import NavigationBar from '../components/NavigationBar'

const Stack = createStackNavigator();

export default function () {
    return (
        <>
            <Stack.Navigator headerMode="none" >
                <Stack.Screen name="Missions" component={Missions} />
                <Stack.Screen name="Quiz" component={Quiz} />
                <Stack.Screen name="Rank" component={Rank} />
            </Stack.Navigator>
            <NavigationBar />
        </>
    );
}
