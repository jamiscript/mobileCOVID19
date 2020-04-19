import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TouchableWithoutFeedback, Keyboard, Image } from 'react-native';
import UsernamePasswordFields from '../components/UsernamePasswordFields'
import CustomButtom from '../components/CustomButton';

export default function Login(props) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View>
      <View style={styles.container}>
        <Image style={styles.logo} source={{uri: 'https://pngimage.net/wp-content/uploads/2018/06/gallery-vector-icon-png.png'}}/>
        <UsernamePasswordFields />
        <View style={styles.hairline} />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <CustomButtom btnName='Facebook'></CustomButtom>
        <CustomButtom btnName='Criar conta'></CustomButtom>
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
});