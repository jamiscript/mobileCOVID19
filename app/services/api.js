import axios from 'axios';
import * as c from './constants'; 

const api = axios.create({
    baseURL: 'https://coronasavior.herokuapp.com/',
});

export async function registerNewUserRequest(data) {
    let res = await api.post(c.USERS, data);
    return res;
}

export async function loginRequest(data) {
    let res = await api.post(c.LOGIN, data);
    return res;
}

export default api