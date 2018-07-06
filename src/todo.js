import { h } from "hyperapp";

export const TodoItem = ({ id, value, done, toggle }) => (
    <li>
      {value}
      <button class="btn btn-danger" onclick={() => toggle(id)}>
        <span class="fa fa-minus" />
      </button>
    </li>
  );
  
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
  );