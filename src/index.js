import { h, app } from "hyperapp";
import "bootstrap";
import "./scss/index.scss";
import {LoginDialog} from "./auth"
import { state, StateContents } from "./state/state.js"
import { actions } from "./state/actions"

const DEBUG = true

const MainPage = () => (state, actions) => (
  <div>
    <h1>This is the main page</h1>
    <button class="btn btn-danger" onclick={() => actions.auth.logout() } >Logout</button>
  </div>
)


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
