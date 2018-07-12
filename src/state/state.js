import { h } from "hyperapp";

export const state = {
  devices: {
    list: [],
    loading: false
  },
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
    <br/>
    <br/>
    <hr/>
    <textarea cols="80" rows="10">
        { JSON.stringify(state, null, '\t') }
    </textarea>
  </div>
)