import { h, app } from "hyperapp";
import "bootstrap";
import "./scss/index.scss";
import {LoginDialog} from "./auth"
import {TodoList } from "./todo"
import { state, StateContents } from "./state/state.js"
import { actions } from "./state/actions"

const DEBUG = true

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
        class="btn btn-success"
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
    return (
      <div>
        <MainPage />
        { DEBUG && <StateContents/>}
      </div>
      )
  } else {
    return (
      <div>
        <LoginDialog />
        { DEBUG && <StateContents/>}
      </div>
      )
  }
};

app(state, actions, view, document.getElementById("app"));
