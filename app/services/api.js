import axios from 'axios';
import * as c from './constants'; 
import { AsyncStorage } from 'react-native';

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

export async function createProfile(data){

  var aut = await getToken();
  
  return fetch(c.API_URL+c.PROFILE, {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': aut
  },
  body : JSON.stringify(data),
  }).then((response) => response.json())
  .then((json) => {
    return json;
  })
  .catch((error) => {
    console.error(error);
  });

}


//get user points
export async function getProfile() {

    var aut = await getToken();
    var resp = null;
    
    return fetch(c.API_URL+c.PROFILE, {
    method: 'Get',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': aut
    },
    }).then((response) => response.json())
    .then((json) => {
      return json.results[0].points;
    })
    .catch((error) => {
      console.error(error);
    });

}

//get user information
export async function getUserInformation() {

    var aut = await getToken();
   return  fetch(c.API_URL+c.USERS, {
    method: 'Get',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': aut
    },
    }).then((response) => response.json())
    .then((json) => {
      return json.results[0];
    })
    .catch((error) => {
      console.error(error);
    });
}

//get ranking
export async function getRanking() {

  var aut = await getToken();
 return  fetch(c.API_URL+c.RANKING, {
  method: 'Get',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': aut
  },
  }).then((response) => response.json())
  .then((json) => {
    return json.results;
  })
  .catch((error) => {
    console.error(error);
  });
}

async function getToken() {
    try {
      const value = await AsyncStorage.getItem('authorization');
      if (value !== null) {
          return value;
      }
    } catch (error) {
      // Error retrieving data
      console.log("Erro get token: " + error);
    }
};


export default api