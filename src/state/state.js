import { h } from "hyperapp";

export const state = {
    todos: [],
    entering: "",
    auth: {
      loggedin: false,
      loginError: "",
      email: "",
      password: ""
    }
  };


export const StateContents = () => (state, actions) => (
  <div>
    <hr/>
    <h3>Current state contents</h3>
    <textarea cols="80" rows="10">
        { JSON.stringify(state, null, '\t') }
    </textarea>
  </div>
)