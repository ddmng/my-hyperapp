const axios = require('axios');
const qs = require('qs');

/**
 * Backend URLs
 */
export const urls = {
  login: "http://localhost:4000/api/users/sign_in"
}

export const doLogin = (email, password) => {
  axios.post(urls.login, qs.stringify({
    email: email,
    password: password
  }))
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.error(error);
  });
}