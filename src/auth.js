import { h } from "hyperapp";
import { state } from "./state/state.js"
import { actions } from "./state/actions"

/**
 * Login dialog Component
 */
export const LoginDialog = () => (state, actions) => (
    <div>
      <input type="text" value={state.auth.email} onchange={(e) => actions.auth.updateEmail(e.target.value)} />
      <input type="text" value={state.auth.password} onchange={(e) => actions.auth.updatePassword(e.target.value)} />
      <button class="btn btn-primary" onclick={ () => actions.auth.login({email: state.auth.email, password: state.auth.password}) } >Login</button>
    </div>
  );
  