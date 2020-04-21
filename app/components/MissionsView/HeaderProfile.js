import React from 'react';
import { View ,StyleSheet,Text } from 'react-native';
import { Avatar } from 'react-native-elements';

const user = {
    username: 'MyNameIsUser',
    points: '500',
    avatar: './assets/snack-icon.png'
  };
  

export default function HeaderProfile() {
    return (
      <View style={styles.header}>
        <Avatar
          size="large"
          rounded
          source={require('./assets/snack-icon.png')}
        />
        <View>
         <Text style={styles.heading}>{user.username}</Text>
          <Text style={styles.subHeading}>Pontos</Text>
          <Text>{user.points}</Text>
        </View>
        
      </View>
    );
  }

  const styles = StyleSheet.create({
    header: {
      backgroundColor: 'dimgray',
      justifyContent: 'space-around',
      flexDirection: 'row',
      padding: 30
    },
    heading: {
      color: 'white',
      fontSize: 20,
    },
    subHeading:{
      fontSize: 20,
    },
  });