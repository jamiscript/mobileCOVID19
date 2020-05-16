import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableWithoutFeedback, SafeAreaView, ScrollView, Keyboard, Image, Alert } from 'react-native';
import CustomButtom from '../components/CustomButton';
import { getToken } from '../providers/auth';

export default function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  async function onSubmit() {
    try {
      await getToken({
        "username": username,
        "password": password
      });
      navigation.navigate('HomeStack');
    } catch (error) {
      setError('Usuário ou senha incorretos!');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={{ flex: 1 }}>
            <View style={styles.container}>
              <Image
                style={styles.logo}
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png' }}
              />
              <View style={styles.inputView}>
                <Text style={styles.error}>{error}</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Usuário"
                  onChangeText={text => setUsername(text)}
                  onChange={() => setError('')}
                  onSubmitEditing={() => { this.passwordInput.focus(); }}
                  blurOnSubmit={false}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Senha"
                  onChangeText={text => setPassword(text)}
                  onChange={() => setError('')}
                  secureTextEntry={true}
                />
                <CustomButtom name="LOGIN" main={true} action={() => onSubmit()} />
                <View style={styles.hairline}></View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                  <CustomButtom name="CRIAR CONTA" main={false} action={() => navigation.navigate("SignUp")} />
                  <CustomButtom name="Facebook" main={false} action={() => { }} />
                </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback >
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9967bf' // Roxo médio
  },
  inputView: {
    flex: 0.5,
    backgroundColor: '#fafafa', // Branco
    borderRadius: 40,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    // Android
    elevation: 20,
    // iOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
  },
  input: {
    minHeight: 40,
    height: 40,
    width: 250,
    marginBottom: 10,
    borderRadius: 30,
    alignSelf: 'center',
    backgroundColor: '#f2f0f5'
  },
  logo: {
    height: 128,
    width: 128,
    marginVertical: 30,
    alignSelf: 'center'
  },
  inputLogo: {
    //padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  error: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingBottom: 15
  },
  hairline: {
    marginTop: 20,
    backgroundColor: '#A2A2A2',
    height: 2,
    width: 300,
    marginBottom: 10
  },
});