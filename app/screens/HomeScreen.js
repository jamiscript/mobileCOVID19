import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';

const user = {
  username: 'MyNameIsUser',
  points: '500',
  avatar: './assets/snack-icon.png'
};

export default function MissionsScreen() {
  return (
    <>
      <View style={styles.container}>
        <HeaderProfile />
        <View />
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
