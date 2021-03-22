import types from './types';

export const addTodo = (todo) => ({
  type: types.TODO_ADD,
  payload: todo,
});

export const deleteTodo = (id) => ({
  type: types.TODO_DELETE,
  payload: id,
});
