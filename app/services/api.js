import axios from 'axios';
import * as c from './constants'; 

export async function register(data) {
    let res = await axios.post(c.USERS, data);
    return res.data;
}

export async function login(data) {
    let res = await axios.post(c.LOGIN, data);
    return res.data
}

const api = axios.create({
    baseURL: 'https://coronasavior.herokuapp.com/',
});

export default api;