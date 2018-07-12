const axios = require('axios');
const qs = require('qs');

/**
 * Backend URLs
 */
export const urls = {
  login: "http://localhost:4000/api/users/sign_in",
  devices: "http://localhost:4000/api/devices/"
}

/**
 * Issues a login to the backend
 * @param {*} email 
 * @param {*} password 
 */
export const doLogin = (email, password) => (
  axios.post(urls.login, qs.stringify({
    email: email,
    password: password
  }))
)

/**
 * Gets the list of all the devices
 */
export const getDevicesList = () => {
  console.log("Getting list of devices...")
  return axios.get(urls.devices)
}