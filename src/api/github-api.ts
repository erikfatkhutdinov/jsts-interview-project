
// Feel free to use something else than 'axios', for example 'ky'
import axios from 'axios';

import ky from 'ky';

import { userorgs } from './userorgs';
import {userdata} from './userdata'
import {userrepos} from './userrepos'


// Documentation is at https://developer.github.com/v3/
const BASE_URL = 'https://api.github.com';


const getRepos1 = async (username: string) => {
  const url = `${BASE_URL}/users/${username}/repos?per_page=250`
  return await ky.get(url).json()
}

const getRepos = async (username: string) => {
  return userrepos()
}

const getUserData = async (username: string) => {
  const user = userdata()
  const orgs = userorgs()
  return {user, orgs}
}

/*
function getRepos(username: string) {
  const url = `${BASE_URL}/users/${username}/repos?per_page=250`;
  return axios.get(url).then(response => response.data);
}
*/

const getUserData1 = async (username: string) => {
  const userData =  ky.get(`${BASE_URL}/users/${username}`).json()
  const userRepos =  ky.get(`${BASE_URL}/users/${username}/orgs`).json()

  return await Promise.all([userData, userRepos]).then(([user, orgs]) => ({user, orgs}))
}

/*
function getUserData(username: string) {
  return axios
    .all([
      axios.get(`${BASE_URL}/users/${username}`),
      axios.get(`${BASE_URL}/users/${username}/orgs`)
    ])
    .then(([user, orgs]) => ({
      user: user.data,
      orgs: orgs.data
    }));
}
*/

export { getRepos, getUserData };
