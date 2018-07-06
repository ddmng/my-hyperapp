import { h } from "hyperapp";
import { state } from "./state/state.js"
import { actions } from "./state/actions"

/**
 * Login dialog Component
 */
export const LoginDialog = () => (state, actions) => (
    <div>
      <input type="text" value="" />
      <input type="text" value="" />
      <button class="btn btn-primary" onclick={ () => actions.loginSuccess() } >Login</button>
    </div>
  );
  