
import { doLogin } from "../rest";

/**
 * Hyperapp Actions
 */
export const actions = {
    auth: {
      updateEmail: value => state => {
        return {...state, email: value}
      },
      updatePassword: value => state => {
        return {...state, password: value}
      },
      loginSuccess: () => state => {
        return {...state, loggedin: true, loginError: false, loggingIn: false}
      },
      loginFailure: () => state => {
        return {...state, loggedin: false, loginError: true,  loggingIn: false}
      },
      login: ({email, password}) => (state, actions) => {
        actions.loggingIn(true)
        doLogin(email, password)
          .then(actions.loginSuccess)
          .catch(actions.loginFailure)
      },
      logout: () => state => {
        return {...state, loggedin: false}
      },
      loggingIn: (value) => state => ({...state, loggingIn: value})
    }
  };
  