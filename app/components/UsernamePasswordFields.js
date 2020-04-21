import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Alert, AsyncStorage, Text, Dimensions } from 'react-native';
import CustomButton from './CustomButton';
import navigation from '../modules/navigation';

const UsernamePasswordFields = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleClick = async () => {
        try {
            /*const response = await api.post('/api/token/', {
                username: username,
                password: password,
            });
            await AsyncStorage.setItem('VIMDoes_token', response.data.access);
            Alert.alert('Logged with success');*/
        }
        catch (error) {
            if (error.response.status === 401) {
                setError('Login or password is incorrect');
            }
            else {
                setError('Please fill username and password');
                console.debug(error.response);
            }
        }
    }
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
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
    error: {
        color: 'red',
        marginBottom: 4,
        fontWeight: 'bold',
    },
});

export default UsernamePasswordFields;