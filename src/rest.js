const axios = require('axios');
const qs = require('qs');
import { actions } from "./state/actions"

/**
 * Backend URLs
 */
export const urls = {
  login: "http://localhost:4000/api/users/sign_in"
}

export const doLogin = (email, password) => (
  axios.post(urls.login, qs.stringify({
    email: email,
    password: password
  }))
)