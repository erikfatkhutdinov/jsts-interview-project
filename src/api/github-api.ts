// Feel free to use something else than 'axios', for example 'ky'
import axios from 'axios';

import ky from 'ky';

// Documentation is at https://developer.github.com/v3/
const BASE_URL = 'https://api.github.com';


const getRepos = async (username: string) => {
  const url = `${BASE_URL}/users/${username}/repos?per_page=250`
  return await ky.get(url).json()
}

/*

function getRepos(username: string) {
  const url = `${BASE_URL}/users/${username}/repos?per_page=250`;
  return axios.get(url).then(response => response.data);
}

*/

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  return ky.get(`${BASE_URL}/users/dd`)
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// expected output: Array [3, 42, "foo"]

const getUserData = async (username: string) => {
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
