import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableWithoutFeedback, Keyboard, Image, Alert } from 'react-native';
import CustomButtom from '../components/CustomButton';
import { getToken } from '../providers/auth';

export default function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  async function onSubmit() {
    try{
      await getToken({
        "username": username,
        "password": password
      });
      console.info("Usuário logado com sucesso!");
    }catch(error){
      Alert.alert("Usuário ou senha incorretos!");
      console.error("erro: ", error);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View>
        <View style={styles.container}>
          <Image style={styles.logo} source={{ uri: 'https://pngimage.net/wp-content/uploads/2018/06/gallery-vector-icon-png.png' }} />

          <View style={styles.container}>
            <Text style={styles.error}>{error}</Text>
            <TextInput style={styles.input}
              placeholder="Username"
              onSubmitEditing={() => { this.passwordInput.focus(); }}
              onChangeText={(text) => setUsername(text)}
              onChange={() => setError('')}
              blurOnSubmit={false}
            />
            <TextInput style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
              onChange={() => setError('')}

            />
            <CustomButtom btnName="Login" action={() => onSubmit()} />
          </View>

          <View style={styles.hairline} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <CustomButtom btnName='Facebook'></CustomButtom>
          <CustomButtom btnName='Criar conta' action={() => navigation.navigate('Registration')}></CustomButtom>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  hairline: {
    marginTop: 20,
    backgroundColor: '#A2A2A2',
    height: 2,
    width: 300,
    marginBottom: 10
  },
  logo: {
    height: 128,
    width: 128,
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 15
  },
});