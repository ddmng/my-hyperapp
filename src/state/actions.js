
import { uniqueId } from "../utils"
import { doLogin } from "../rest";

/**
 * Hyperapp Actions
 */
export const actions = {
    // TODO move this code outside action
    add: value => state => {
      if (!value) return state;
      const elem = {
        id: uniqueId(state.todos),
        value: value,
        done: false
      };
  
      return {...state, todos: state.todos.concat(elem), entering: "" };
    },
    updateEntering: value => state => {
      return {...state, entering: value };
    },
    delete: value => state => {
      return {...state,  todos: state.todos.filter(el => el.id != value) };
    },
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
  