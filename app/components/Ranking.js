import * as React from 'react';
import { Text, View, StyleSheet, FlatList, AsyncStorage } from 'react-native';
import Constants from 'expo-constants';
import { Card, Avatar } from 'react-native-paper';

const Collocation = props => {
  return (
    <Card style={styles.card}>
      <View style={styles.container}>
        <Text style={styles.placed}>{props.placed}</Text>
        <Avatar.Image
          style={styles.avatar}
          size={40}
          source={{ uri: props.img }}
        />
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.points}>{props.points}</Text>
      </View>
    </Card>
  );
};

export default function Ranking() {
  const ranking = [
    {
      id: '01',
      name: 'Hugo',
      img: 'https://vectorified.com/images/avatar-icon-png-9.jpg',
      points: '4000',
    },
    {
      id: '02',
      name: 'Hugo',
      img: 'https://vectorified.com/images/avatar-icon-png-9.jpg',
      points: '4000',
    },
    {
      id: '03',
      name: 'Hugo',
      img: 'https://vectorified.com/images/avatar-icon-png-9.jpg',
      points: '4000',
    },
    {
      id: '04',
      name: 'Hugo',
      img: 'https://vectorified.com/images/avatar-icon-png-9.jpg',
      points: '4000',
    },
    {
      id: '05',
      name: 'Hugo',
      img: 'https://vectorified.com/images/avatar-icon-png-9.jpg',
      points: '4000',
    },
    {
      id: '06',
      name: 'Hugo',
      img: 'https://vectorified.com/images/avatar-icon-png-9.jpg',
      points: '4000',
    },
    {
      id: '07',
      name: 'Hugo',
      img: 'https://vectorified.com/images/avatar-icon-png-9.jpg',
      points: '4000',
    },
  ];
  return (
    <View style={styles.ranking}>
      <FlatList
        data={ranking}
        keyExtractor={rank => rank.id}
        renderItem={({ item }) => {
          return (
            <Collocation
              placed={ranking.indexOf(item) + 1}
              name={item.name}
              img={item.img}
              points={item.points}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  ranking: {
    flex: 3,
    backgroundColor: 'whitesmoke',
  },
  card: {
    margin: 10,
    backgroundColor: 'darkgrey',
    borderColor: "#6d17b0",
    borderWidth: 2,
    borderRadius: 15,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  placed: {
    paddingHorizontal: 15,
    borderRightWidth: 2,
    borderRightColor: '#6d17b0',
    fontSize: 40,
    color: 'black',
  },
  points: {
    left: 150,
    color: 'black',
  },
  name: {
    left: 10,
    paddingHorizontal: 15,
    color: 'black',
  },
  avatar: {
    left: 5,
    backgroundColor: '#D2CCCB',
  },
});
