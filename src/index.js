import { h, app } from "hyperapp";
import "bootstrap";
import "./scss/index.scss";
import {LoginDialog} from "./auth"
import {TodoList } from "./todo"

const state = {
  todos: [],
  entering: "",
  auth: {
    loggedin: false,
    loginError: "",
    user: ""
  }
};

import { actions } from "./state/actions"

/**
 * Backend URLs
 */
const urls = {
  login: "http://localhost:4000/api/users/sign_in"
}

/**
 * Main page after Login Success
 */
const MainPage = () => (state, actions) => (
  <div>
    <div>
      <input
        type="text"
        class=""
        onchange={e => actions.updateEntering(e.target.value)}
        value={state.entering}
      />
      <button
        class="btn btn-default"
        onclick={() => actions.add(state.entering)}
      >
        <span class="fa fa-plus" />
      </button>
    </div>
    <TodoList />
  </div>
);


/**
 * Main view
 * @param {*} state 
 * @param {*} actions 
 */
const view = (state, actions) => {
  if (state.auth.loggedin) {
    return <div><MainPage /></div>
  } else {
    return <div><LoginDialog /></div>
  }
};

app(state, actions, view, document.getElementById("app"));
