// Feel free to use something else than 'axios', for example 'ky'
import axios from 'axios';

import ky from 'ky';

// Documentation is at https://developer.github.com/v3/
const BASE_URL = 'https://api.github.com';
 
/*
(async () => {
    const parsed = await ky.post('https://example.com', {json: {foo: true}}).json();
 
    console.log(parsed);
    //=> `{data: '🦄'}`
})();
*/

const getRepos = async (username: string) => {
  const url = `${BASE_URL}/users/${username}/repos?per_page=250`
  return await ky.get(url).json().then(data => data)
}


/*

function getRepos1(username: string) {
  const url = `${BASE_URL}/users/${username}/repos?per_page=250`;
  return axios.get(url).then(response => response.data);
}
*/

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

export { getRepos, getUserData };
