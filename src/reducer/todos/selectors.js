import { createSelector } from 'reselect';

const getTodos = (state) => state.todos.items;

export const getDoneTodosSelector = createSelector([getTodos], (todos) =>
  todos.filter(({ isDone }) => isDone),
);

export const getNotDoneTodosSelector = createSelector([getTodos], (todos) =>
  todos.filter(({ isDone }) => !isDone),
);

export const getShowModalSelector = (state) => state.todos.showModal;
export const getSelectedTodoSelector = (state) => state.todos.selectedTodo;
export const getTodosCountSelector = (state) => state.todos.items.length;
