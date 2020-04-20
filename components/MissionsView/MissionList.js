import React from 'react';
import { View,FlatList } from 'react-native';
import Mission from './MissionInfo'

const missions = [
    {
      id: `01`,
      title: `Mission 01`,
      points: `50`,
      info: `In this mission you'll have to blablabla blablabla `,
    },
    {
      id: `02`,
      title: `Mission 02`,
      points: `20`,
      info: `In this mission you'll have to blablabla `,
    },
    {
      id: `03`,
      title: `Mission 03`,
      points: `10`,
      info: `In this mission you'll have to blablabla blablabla`,
    },
  ];
  

export default function MissionList() {
    return (
      <View>
        <FlatList
          data={missions}
          renderItem={({ item }) => <Mission mission={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }