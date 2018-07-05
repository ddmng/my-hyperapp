import { h, app } from "hyperapp";
import "bootstrap";
import "./scss/index.scss";

const state = {
  todos: [],
  entering: ""
}

const actions = {
  add: value => state => {
    if(!value)
      return state
    const elem = { 
      id: uniqueId(state.todos),
      value: value,
      done: false
    }

    return { todos: state.todos.concat(elem), entering: "" };
  },
  updateEntering: value => state => {
    return { todos: state.todos, entering: value };
  },
  delete: value => state => {
    return { todos: state.todos.filter(el => el.id != value) };
  }
}

/**
 * Returns a new uniqueId from the todos list picking the max id value from the array
 * @param {Array<TodoItem>} Array of todos
 */
const uniqueId = todos => {
  const reducer = (acc, val) => (acc.id > val.id ? acc.id : val.id);

  if (todos && todos.length > 0) {
    return 1 + todos.reduce(reducer);
  } else {
    return 0;
  }
}

export const TodoItem =  ({ id, value, done, toggle }) => (
  <li>
    {value}
    <button class="btn btn-danger" onclick={() => toggle(id)}>
      <span class="fa fa-minus" />
    </button>
  </li>
)

export const TodoList = () => (state, actions) => (
  <div>
  <h1>Todo list</h1>
  <ul>
    {state.todos.map(x => (
      <TodoItem
        id={x.id}
        value={x.value}
        done={x.done}
        toggle={actions.delete}
      />
    ))}
  </ul>
  </div>
)

const view = (state, actions) => (
  <div>
    <div>
      <input
        type="text"
        class=""
        onchange={e => actions.updateEntering(e.target.value)}
        value={state.entering}
      />
      <button
        class="btn btn-default"
        onclick={() =>
          actions.add(state.entering)
        }
      >
        <span class="fa fa-plus" />
      </button>
    </div>
        <TodoList />
  </div>
);

app(state, actions, view, document.getElementById("app"));
