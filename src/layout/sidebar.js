import { h } from "hyperapp";


const DevicesList = ({devices}) => {
  return devices.map( item => 
      <li class="nav-item">
        <a class="nav-link" href="#">
          <i class="nav-icon cui-speedometer"></i>{item.name}</a>
      </li>
    )
}
/**
 * Sidebar
 */
export const SideBar = () => (state, actions) => (
  <div class="sidebar" oncreate={() => setInterval(() => actions.devices.list(), 2000 )}>
    <nav class="sidebar-nav">
      <ul class="nav">
        <li class="nav-title">devices list</li>

        <DevicesList devices={state.devices.list} />

      </ul>
    </nav>
    <button class="sidebar-minimizer brand-minimizer" type="button"></button>
  </div>
)