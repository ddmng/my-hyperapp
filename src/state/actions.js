
import { doLogin, getDevicesList } from "../rest";

/**
 * Hyperapp Actions
 */
export const actions = {
  devices: {
    list: () => (state, actions) => {
      actions.gettingDevices(true)
      getDevicesList()
        .then(actions.listSuccess)
        .catch(actions.listFailure)
    },
    gettingDevices: (value) => (state) => (
      {...state, loading: value}
    ),
    listSuccess: (payload) => state => {
      console.log("devices list payload: ", payload)
      return {
        ...state,
        list: payload.data.data,
        loading: false
      }
    },
    listFailure: (error) => state => {
      console.error("device list error: " ,error)
      return  {
        ...state,
        list: [],
        loading: false
      }
    },
  },
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
  