import types from './types';

export const addTodo = (todo) => ({
  type: types.TODO_ADD,
  payload: todo,
});

export const deleteTodo = (id) => ({
  type: types.TODO_DELETE,
  payload: id,
});

export const toggleTodo = (id) => ({
  type: types.TODO_TOGGLE,
  payload: id,
});

export const selectTodo = (id) => ({
  type: types.TODO_SELECT,
  payload: id,
});

export const editTodo = (payload) => ({
  type: types.TODO_EDIT,
  payload,
});

export const toggleModal = () => ({
  type: types.MODAL_TOGGLE,
});
