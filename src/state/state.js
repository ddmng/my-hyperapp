import { h } from "hyperapp";

export const state = {
    auth: {
      loggedin: false,
      loginError: false ,
      email: "aaa@aaa.com",
      password: "qwerty",
      loggingIn: false
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