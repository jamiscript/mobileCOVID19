import React from 'react';
import {View} from 'react-native';

import Ranking from '../components/Ranking';
import States from '../components/States.js';

export default function ScreenRanking() {
  return (
    <View
      style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
      <States />
      <Ranking />
      
    </View>
  );
}