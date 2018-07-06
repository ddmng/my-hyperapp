import { h } from "hyperapp";
import { SideBar } from "./sidebar.js"
import { StateContents } from "../state/state"

const DEBUG = true

export const MainPage = () => (state, actions) => (
    <div class="app-body">
      <SideBar/>
      <main class="main">
      <div>
          <h1>Devices list</h1>
          <button class="btn btn-danger" onclick={() => actions.auth.logout() } >
          <i class="fa fa-sign-out"></i>
          Logout
          </button>
        </div>
  
      { DEBUG && <StateContents/>}
  
      </main>

    </div>
  )