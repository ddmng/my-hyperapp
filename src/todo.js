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

  /**
 * Todo management
 */
export const TodoPage = () => (state, actions) => (
  <div>
    <div>
      <input
        type="text"
        class=""
        onchange={e => actions.updateEntering(e.target.value)}
        value={state.entering}
      />
      <button
        class="btn btn-success"
        onclick={() => actions.add(state.entering)}
      >
        <span class="fa fa-plus" />
      </button>
    </div>
    <TodoList />
  </div>
);
