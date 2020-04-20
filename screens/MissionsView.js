import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import HeaderProfile from '../components/MissionsView/HeaderProfile'
import MissionList from '../components/MissionsView/MissionList'

//mock data 

export default function MissionsScreen() {
  return (
    <View style={styles.container}>
      <HeaderProfile />
      <MissionList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
