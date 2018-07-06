/**
 * Returns a new uniqueId from the todos list picking the max id value from the array
 * @param {Array<TodoItem>} Array of todos
 */
export const uniqueId = todos => {
    const reducer = (acc, val) => (acc.id > val.id ? acc.id : val.id);
  
    if (todos && todos.length > 0) {
      return 1 + todos.reduce(reducer);
    } else {
      return 0;
    }
  };