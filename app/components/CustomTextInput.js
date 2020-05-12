import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';

const customTextInput = (prop) => {
    const [error, setError] = useState('');
    return (
        <View>
            <Text style={styles.error}>{error}</Text>
            <TextInput style={prop.style}
                placeholder={prop.placeholder}
                onChangeText={value => prop.action(value,prop.option)}
                onChange={() => setError('')}
                blurOnSubmit={false}
                secureTextEntry={prop.isSensitive}
            />
        </View>
    );
}

export default customTextInput;

const styles = StyleSheet.create({
    error: {
        color: 'red',
        marginBottom: 4,
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        width: 300,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
    }
}); 
