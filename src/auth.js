import { h } from "hyperapp";
import { state } from "./state/state.js"
import { actions } from "./state/actions"

/**
 * Login dialog Component
 */
export const LoginDialog = () => (state, actions) => (
  <div class="row">
    <div class="col">
      <input type="email" class="form-control" value={state.auth.email} onchange={(e) => actions.auth.updateEmail(e.target.value)} />
    </div>
    <div class="col">
      <input type="password" class="form-control" value={state.auth.password} onchange={(e) => actions.auth.updatePassword(e.target.value)} />
    </div>
    <button class="btn btn-primary" onclick={ () => actions.auth.login({email: state.auth.email, password: state.auth.password}) } >Login</button>
  </div>
);
  