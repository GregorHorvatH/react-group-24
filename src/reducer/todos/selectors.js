// import { createSelector } from 'reselect';
import { createArraySelector } from 'reselect-map';

// const getTodos = (state) => state.todos.items;

const getDoneItems = (state) =>
  state.todos.items.filter(({ isDone }) => isDone);
const getNotDoneItems = (state) =>
  state.todos.items.filter(({ isDone }) => !isDone);

export const getDoneTodosSelector = createArraySelector(
  [getDoneItems],
  (todo) => todo,
);

export const getNotDoneTodosSelector = createArraySelector(
  [getNotDoneItems],
  (todo) => todo,
);

export const getAllTodosSelector = (state) => state.todos.items;
export const getShowModalSelector = (state) => state.todos.showModal;
export const getSelectedTodoSelector = (state) => state.todos.selectedTodo;
export const getTodosCountSelector = (state) => state.todos.items.length;
