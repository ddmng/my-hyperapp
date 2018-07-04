import { h, app } from "hyperapp"
import 'bootstrap'
import './scss/index.scss'
import { List } from 'immutable'

const state = {
  todos: [],
  entering: ""
}

const actions = {
  add: value => state => {
    console.log("prev state: ", state)
    console.log("cur value: ", value)
    return ({ todos: [...state.todos, value], entering: "" })
  },
  updateEntering: value => state => {
    console.log("adding: ", value)
    return ({ todos: state.todos, entering: value })
  }
}
export const TodoItem = ({actions, todo}) => (
  <li>{todo.text}</li>
)

const view = (state, actions) => (
  <div>
    <div>
      <input type="text" class="" onchange={(e) => actions.updateEntering(e.target.value)} value={state.entering}></input>
      <button class="btn btn-default" onclick={() => actions.add({ id: 999, text: state.entering, done: false })}> <span class="fa fa-plus"></span> </button>
    </div>
    <div>
      <h1>Todo list</h1>
      <ul>
        { state.todos &&
          state.todos.map( (x) => <TodoItem todo={x}/>) }
      </ul>
    </div>
  </div>
)

app(state, actions, view, document.getElementById('app'))
