import { AsyncStorage } from 'react-native'
import * as api from '../services/api'

export async function getToken(payload) {
    let response = await api.loginRequest(payload);
    let authorization = `Bearer ${response.data.access}`;
    AsyncStorage.setItem("authorization", authorization);
    AsyncStorage.setItem("refresh", response.data.refresh);
}

export async function registerUser(payload){
    return await api.registerNewUserRequest(payload)
}
