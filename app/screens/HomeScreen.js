import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text,Alert } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import { getProfile } from '../services/api';
import { getUserInformation } from '../services/api';

export default function MissionsScreen({ route, navigation })  {

  const [user, setUser] = useState({})
  const [messageIndex, setMessageIndex] = useState(0)
  const [profile, setProfile] =  useState({})
  
var usuario;
var prof;

  const messages = [
    "Lave sempre muite bem as mãos.",
    "Utilize álcool em gel fora de casa.",
    "Tenha cuidado com os produtos em mercados."
  ]

  const rotateMessages = function () {
    if (messageIndex + 1 >= messages.length) {
      setMessageIndex(0)
      return
    }
    setMessageIndex(messageIndex + 1)
  }

  async function findProfileInformation() {
    try {
      let params = {
        points : await getProfile(),
        username : await getUserInformation(),
        avatar: './assets/snack-icon.png'
      }

     setUser(params);


    } catch (err) {
        Alert.alert("Erro ao buscar profile")
        console.log('Error', err)
    }
}


  const message = messages[messageIndex]

  findProfileInformation()
  
  return (
    <>
      <View style={styles.container}>
        <HeaderProfile username={user.username} points={user.points} avatar={user.avatar} />
        <HomeCommon onClick={() => rotateMessages()} message={message} />
      </View>
    </>
  );
}

function HeaderProfile(props) {
  return (
    <View style={styles.header}>
      <Avatar
        size="large"
        rounded
        source={require('../assets/images/snack-icon.png')}
      />
      <View style={{ flexDirection: 'column' }}>
        <Text style={styles.heading}>{props.username}</Text>
        <View style={{ flexDirection: 'row', justifyContent: "center", marginVertical: 10 }}>
          <Text style={styles.subHeading}>{props.points} pts</Text>
        </View>
      </View>
      <View style={{ justifyContent: "center" }}>
        <Icon name='settings' color="#feee35" onPress={() => console.log('go to edit profile')}></Icon>
      </View>
    </View>
  );
}

function HomeCommon(props) {
  return (
    <View style={styles.common}>
      <View style={styles.messageBox}>
        <Text style={styles.message}>{props.message}</Text>
      </View>
      <View style={styles.buttonBox}>
        <Icon name="search" size={200} onPress={props.onClick}></Icon>
      </View>
    </View>
  )
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
    padding: 25,
    flex: 1
  },
  heading: {
    color: 'white',
    fontSize: 20,
  },
  subHeading: {
    fontSize: 20,
  },
  common: {
    flex: 6,
    justifyContent: "space-between",
    flexDirection: "column",
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  messageBox: {
    flex: 1,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#6d17b0",
    justifyContent: "center"
  },
  message: {
    //textAlignVertical: "",
    textAlign: "center",
    color: "#6d17b0",
    fontSize: 22
  },
  buttonBox: {
    flex: 5,
    padding: 50
  }
});
