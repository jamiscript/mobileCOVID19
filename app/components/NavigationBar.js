import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function NavigationBar() {
  const navigation = useNavigation();

  return (
    <View style={styles.footer}>
      <Appbar style={styles.bottom}>
        <Appbar.Action
          icon={require('../assets/images/iconRanking.png')}
          onPress={() => navigation.navigate("Rank")}
        />
        <Appbar.Action
          icon={require('../assets/images/iconHome.png')}
          onPress={() => navigation.navigate("Missions")}
        />
        <Appbar.Action
          icon={require('../assets/images/iconQuiz.png')}
          onPress={() => navigation.navigate("Quiz")}
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
    flex: 0.1,
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
