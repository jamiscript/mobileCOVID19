import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card, Avatar, Appbar, Button } from 'react-native-paper';

export default function NavigationBar() {
  return (
    <View style={styles.footer}>
      <Appbar style={styles.bottom}>
        <Appbar.Action
          icon={require('../assets/iconRanking.png')}
          onPress={() => console.log('Pressed Ranking')}
        />
        <Appbar.Action
          icon={require('../assets/iconHome.png')}
          onPress={() => console.log('Pressed Home')}
        />
        <Appbar.Action
          icon={require('../assets/iconQuiz.png')}
          onPress={() => console.log('Pressed Quiz')}
        />
      </Appbar>
    </View>
  );
}
const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#474646',
    flex: 0.5,
  },
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'space-around',
    backgroundColor: '#474646',
  },
});
