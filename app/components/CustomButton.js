import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const CustomButton = props => {
  return (
    <View>
      <TouchableOpacity onPress={props.action}>
        <Text style={props.main ? styles.button : styles.button2}>
          {props.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    color: 'black',
    backgroundColor: '#feee35', // Amarelo
  },
  button2: {
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: '#9967bf' // Roxo médio
  }
});

export default CustomButton;
