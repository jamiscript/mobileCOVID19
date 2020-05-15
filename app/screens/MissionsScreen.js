import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';

//mock data 
const user = {
  username: 'MyNameIsUser',
  points: '500',
  avatar: './assets/snack-icon.png'
};
const missions = [
  {
    id: `01`,
    title: `Mission 01`,
    points: `50`,
    type: `room`,
  },
  {
    id: `02`,
    title: `Mission 02`,
    points: `20`,
    type: `stars`,
  },
  {
    id: `03`,
    title: `Mission 03`,
    points: `10`,
    type: `flag`,
  },
  {
    id: `04`,
    title: `Mission 04`,
    points: `10`,
    type: `room`,
  },
  {
    id: `05`,
    title: `Mission 05`,
    points: `10`,
    type: `stars`,
  },
  {
    id: `06`,
    title: `Mission 06`,
    points: `10`,
    type: `flag`,
  },
  {
    id: `07`,
    title: `Mission 07`,
    points: `10`,
    type: `stars`,
  },
  {
    id: `08`,
    title: `Mission 08`,
    points: `10`,
    type: `stars`,
  },
];

export default function MissionsScreen() {
  return (
    <>
      <View style={styles.container}>
        <HeaderProfile />
        <MissionList />
      </View>
      
    </>
  );
}

function HeaderProfile() {
  return (
    <View style={styles.header}>
      <Avatar
        size="large"
        rounded
        source={require('../assets/images/snack-icon.png')}
      />
      <View style={{ flexDirection: 'column' }}>
        <Text style={styles.heading}>{user.username}</Text>
        <View style={{ flexDirection: 'row', justifyContent: "center", marginVertical: 10 }}>
          <Text style={styles.subHeading}>{user.points} pts</Text>
        </View>
      </View>
      <View style={{ justifyContent: "center", backgroundColo:"#9967bf"  }}>
        <Icon name='settings' color="#feee35" onPress={() => console.log('go to edit profile')}></Icon>
      </View>
    </View>
  );
}

function Mission({ mission }) {
  return (
    <View style={styles.missionCard}>
      <Icon name={mission.type} color="#feee35"></Icon>
      <Text style={styles.heading}>
        {mission.title}
      </Text>
      <Text style={styles.subHeading}>{mission.points} pts</Text>
    </View>
  );
}

function MissionList() {
  return (
    <FlatList
      data={missions}
      renderItem={({ item }) => <Mission mission={item} />}
      keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    //this should change when we have a safearea policy
    flex: 9
  },
  header: {
    backgroundColor: '#6d17b0',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 25
  },
  heading: {
    color: 'white',
    fontSize: 20,
  },
  subHeading: {
    fontSize: 20,
  },
  missionCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'darkgrey',
    margin: 10,
    padding: 20,
    borderRadius: 10,
    borderColor:"#6d17b0",
    borderWidth: 1
  }
});
