import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Alert
} from 'react-native';
import { Avatar } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import * as yup from 'yup';
import { Formik } from 'formik';
import { registerUser } from '../providers/auth';

export default function SignUpScreen() {
    const navigation = useNavigation();

    async function register(userInfo) {
        try {
            await registerUser({
                "first_name": userInfo.first_name,
                "last_name": userInfo.last_name,
                "username": userInfo.username,
                "email": userInfo.email,
                "password": userInfo.password
            });
            navigation.navigate("Login");
        } catch (err) {
            Alert.alert("Erro ao registrar novo usuário");
        }
    }

    const handleSubmit = (values) => {
        register(values);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.box}>
                    <Avatar
                        size="large"
                        source={require('../assets/images/heart-icon.jpeg')}
                    />
                    <Text style={{ fontSize: 30, paddingTop: 10 }}>Criar conta</Text>
                    <Formik
                        initialValues={{ first_name: '', last_name: '', username: '', email: '', password: '', confirmPassword: '' }}
                        validationSchema={yup.object().shape({
                            first_name: yup
                                .string()
                                .required('Nome obrigatório'),
                            last_name: yup
                                .string()
                                .required('Sobrenome obrigatório'),
                            username: yup
                                .string()
                                .required('Username obrigatório'),
                            email: yup
                                .string()
                                .email('Email inválido')
                                .required('Email obrigatório'),
                            password: yup
                                .string()
                                .required('Senha obrigatória'),
                            confirmPassword: yup
                                .string()
                                .required('Confirme sua senha')
                                .test('passwords-match', 'Senhas diferem', function (
                                    value
                                ) {
                                    return this.parent.password === value;
                                }),
                        })}
                        onSubmit={values => handleSubmit(values, navigation)}>
                        {({ handleSubmit, values, setFieldValue, isValid, errors }) => (
                            <View>
                                <TextInput
                                    style={styles.input}
                                    value={values.first_name}
                                    form
                                    placeholder=" Primeiro nome"
                                    placeholderTextColor='black'
                                    onChangeText={text => setFieldValue('first_name', text)}
                                />
                                <Text style={{ color: 'red' }}>{errors.first_name}</Text>
                                <TextInput
                                    style={styles.input}
                                    value={values.last_name}
                                    form
                                    placeholder=" Sobrenome"
                                    placeholderTextColor='black'
                                    onChangeText={text => setFieldValue('last_name', text)}
                                />
                                <Text style={{ color: 'red' }}>{errors.last_name}</Text>
                                <TextInput
                                    style={styles.input}
                                    value={values.username}
                                    form
                                    placeholder=" Username"
                                    placeholderTextColor='black'
                                    onChangeText={text => setFieldValue('username', text)}
                                />
                                <Text style={{ color: 'red' }}>{errors.username}</Text>
                                <TextInput
                                    style={styles.input}
                                    value={values.email}
                                    form
                                    placeholder=" E-mail"
                                    placeholderTextColor='black'
                                    onChangeText={text => setFieldValue('email', text)}
                                />
                                <Text style={{ color: 'red' }}>{errors.email}</Text>
                                <TextInput
                                    style={styles.input}
                                    value={values.password}
                                    secureTextEntry={true}
                                    placeholder=" Senha"
                                    placeholderTextColor='black'
                                    onChangeText={text => setFieldValue('password', text)}
                                />
                                <Text style={{ color: 'red' }}>{errors.password}</Text>
                                <TextInput
                                    style={styles.input}
                                    value={values.confirmPassword}
                                    secureTextEntry={true}
                                    placeholder=" Confirme a senha"
                                    placeholderTextColor='black'
                                    onChangeText={text => setFieldValue('confirmPassword', text)}
                                />
                                <Text style={{ color: 'red' }}>{errors.confirmPassword}</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 25 }}>
                                    <TouchableOpacity
                                        style={styles.button}
                                        onPress={handleSubmit}
                                        disabled={!isValid}>
                                        <Text style={styles.buttonText}>CRIAR</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                    </Formik>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6d17b0',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    scrollView: {
        marginVertical: 50
    },
    box: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'whitesmoke',
        borderRadius: 15
    },
    input: {
        marginTop: 15,
        marginLeft: 1,
        height: 60,
        width: 300,
        fontSize: 15,
        borderRadius: 15,
        borderColor: '#f0dcff',
        backgroundColor: '#f0dcff',

    },
    button: {
        backgroundColor: '#feee35',
        height: 40,
        width: 100,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontWeight: 'bold',
        color: 'black'
    },
});
