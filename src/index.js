import { h, app } from "hyperapp";
import "bootstrap";
import "./scss/index.scss";
import {LoginDialog} from "./auth"
import { TodoPage } from "./todo"
import { state, StateContents } from "./state/state.js"
import { actions } from "./state/actions"

const DEBUG = true

const MainPage = () => (state, actions) => (
  <div>
    <TodoPage />
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
