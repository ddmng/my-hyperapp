
import { uniqueId } from "../utils"

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
    loginSuccess: value => state => {
      return {...state, auth: {...state.auth, loggedin: true} }
    }
  };
  