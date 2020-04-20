import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper';

const State = props => {
  return (
    <View style={styles.header}>
      <View style={styles.avatarContainer}>
        <Avatar.Image
          style={styles.avatar}
          size={70}
          source={{
            uri:props.img,
          }}
        />
      </View>
      <View style={styles.dataContainer}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.points}>{props.points}</Text>
      </View>
      <View style={styles.placedContainer}>
        <Text style={styles.placed}>{props.placed}</Text>
      </View>
    </View>
  );
};

export default function NavigationBar() {
  const user = {
    name: 'João',
    points: '1000',
    img: 'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/user-512.png',
    placed: '250',
  };

  return (
    <State
      name={user.name}
      points={user.points}
      img={user.img}
      placed={user.placed}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#474646',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  points: {
    color: 'white',
    fontSize: 20,
  },
  name: {
    color: 'white',
    left:5
  },
  avatar: {
    backgroundColor: '#D2CCCB',
    marginHorizontal: 20,
  },
  placed: {
    fontSize: 40,
    color: 'white',
  },
  dataContainer: {
    flexDirection: 'column',
    left: 10,
    flex: 3,
  },
  placedContainer: {
    flex: 2,
  },
  avatarContainer: {
    flex: 2,
  },
});
