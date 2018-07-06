
import { doLogin } from "../rest";

/**
 * Hyperapp Actions
 */
export const actions = {
    // TODO move this code outside action
    auth: {
      updateEmail: value => state => {
        return {...state, email: value}
      },
      updatePassword: value => state => {
        return {...state, password: value}
      },
      loginSuccess: () => state => {
        return {...state, loggedin: true, loginError: false}
      },
      loginFailure: () => state => {
        return {...state, loggedin: false, loginError: true}
      },
      login: ({email, password}) => (state, actions) => {
        doLogin(email, password)
          .then(actions.loginSuccess)
          .catch(actions.loginFailure)
      }
    }
  };
  