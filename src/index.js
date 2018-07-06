import { h, app } from "hyperapp";

import "bootstrap";
import "@coreui/coreui"
import "./scss/index.scss";
import { LoginDialog } from "./layout/login"
import { state } from "./state/state"
import { actions } from "./state/actions"
import { PageHeader } from "./layout/header.js"
import { MainPage } from "./layout/contents.js"

/**
 * Main view
 * @param {*} state 
 * @param {*} actions 
 */
const view = (state, actions) => {
  if (state.auth.loggedin) {
    return (
      <div>
        <PageHeader/>
        <MainPage />
      </div>
      )
  } else {
    return (
      <div>
        <LoginDialog />
      </div>
      )
  }
};

app(state, actions, view, document.getElementById("app"));
