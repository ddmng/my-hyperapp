import { h } from "hyperapp";
import { state } from "../state/state.js"
import { actions } from "../state/actions.js"

/**
 * Login dialog Component
 */
export const LoginDialog = () => (state, actions) => (
  
  <div class="form-inline">
    <div class="form-group mb-2">
        <div class="col">
        <input type="email" 
                class="form-control" 
                value={state.auth.email} 
                onchange={(e) => actions.auth.updateEmail(e.target.value)} />
      </div>
      <div class="col">
        <input type="password" 
                class="form-control" 
                value={state.auth.password} 
                onchange={(e) => actions.auth.updatePassword(e.target.value)} />
      </div>
      <button class="btn btn-primary" disabled={state.auth.loggingIn} 
              onclick={ () => actions.auth.login({email: state.auth.email, password: state.auth.password}) } >
              <i class={state.auth.loggingIn ? "fa fa-spinner fa-spin" : "fa fa-sign-in"}></i> Login
      </button>
    </div>
  </div>
);
  