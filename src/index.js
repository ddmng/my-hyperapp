import { h, app } from "hyperapp"
import 'bootstrap'
import './scss/index.scss'

const state = {
  todos: [],
  entering: ""
}

const newId = (todos) => {
  const reducer = (acc, value) => (acc >= value ? acc : value)
  if (todos.length == 0)
    return 0
  else
    return 1 + todos.reduce(reducer)
}

const actions = {
  add: value => state => {
    const v = { id: newId(state.todos), text: value, done: false }
    return ({ todos: state.todos.concat( [ v ]), entering: "" })
  },
  updateEntering: value => state => {
    return ({ todos: state.todos, entering: value })
  },
  remove: value => state => {
    return { todos: state.todos.filter( (x) => x.id != value.id ), entering: state.entering }
  }
}

const TodoItem = ( { item } ) => (state, actions) => (
  <li>
    { item.text } <button class="btn btn-danger" onclick={() => actions.remove(item)}><i class="fa fa-minus"></i></button>
  </li>
)


const TodoList = () =>  (state, actions) => (
  <div>
  <h1>Todo list</h1>
  <ul>
    { state.todos.map( (x) => <TodoItem item={x} />) }
  </ul>
</div>
)

const view = (state, actions) => (
  <div>
    <div>
      <input type="text" class="" oninput={(e) => actions.updateEntering(e.target.value)} value={state.entering}></input>
      <button class="btn btn-default" onclick={() => actions.add(state.entering)}> <span class="fa fa-plus"></span> </button>
    </div>
    <TodoList  />
  </div>
)

app(state, actions, view, document.getElementById('app'))
