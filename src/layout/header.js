import { h } from "hyperapp";

/**
 * Page header
 */
export const PageHeader = () => (state, actions) => (
    <header class="app-header navbar">
      <button class="navbar-toggler sidebar-toggler d-lg-none mr-auto" type="button" data-toggle="sidebar-show">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="https://coreui.io">
        <img src="https://coreui.io/docs/assets/brand/logo.svg" alt="CoreUI Logo" width="89" height="25"/>
      </a>
      <ul class="nav navbar-nav mr-auto d-md-down-none">
        <li class="nav-item px-3">
        <a class="nav-link" href="https://coreui.io/">CoreUI Website</a>
        </li>
        <li class="nav-item px-3">
        <a class="nav-link" href="https://coreui.io/icons/">CoreUI Icons</a>
        </li>
        <li class="nav-item px-3">
        <a class="btn btn-warning" href="https://coreui.io/pro/">Go Pro</a>
        </li>
      </ul>
      <ul class="nav navbar-nav d-md-down-none">
      <li class="nav-item px-3">
      <a class="btn btn-warning" href="https://coreui.io/support/">Support CoreUI Development</a>
      </li>
      </ul>
    </header>
  )
  