import { h, app } from "hyperapp"
import 'bootstrap'
import './scss/index.scss'

const state = {
  count: 0
}

const actions = {
  down: value => state => ({ count: state.count - value }),
  up: value => state => ({ count: state.count + value })
}

const view = (state, actions) => (
  <div>
    <h1>{state.count}</h1>
    <button class="btn btn-primary" onclick={() => actions.down(1)}>-</button>
    <button class="btn btn-warning" onclick={() => actions.up(3)}>+</button>
  </div>
)

app(state, actions, view, document.getElementById('app'))