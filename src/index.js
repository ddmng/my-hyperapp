import { h, app } from "hyperapp"
import 'bootstrap'
import './scss/index.scss'

const state = {
  count: 0,
  globalBoolean: false
}

const actions = {
  down: value => state => ({ count: state.count - value }),
  up: value => state => ({ count: state.count + value }),
  toggle: value => state => ({ globalBoolean: !state.globalBoolean })
}

const view = (state, actions) => (
  <div>
    <h1>{state.count}</h1>
    <button class="btn btn-primary" onclick={() => actions.down(1)}><span class="fa fa-minus"></span></button>
    <button class="btn btn-warning" onclick={() => actions.up(3)}><span class="fa fa-plus"></span></button>
    <button class="btn btn-default" onclick={() => actions.toggle()}><span class="fa fa-stop"></span></button>
    <h2>{ state.globalBoolean?"True":"False" }</h2>
  </div>
)

app(state, actions, view, document.getElementById('app'))
