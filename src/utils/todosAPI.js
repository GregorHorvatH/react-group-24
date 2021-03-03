import axios from 'axios';

// const url = 'http://localhost:8080';

// export const getTodos = () => fetch(`${url}/todos`).then((resp) => resp.json());

// export const createTodo = (payload) =>
//   fetch(`${url}/todos`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(payload),
//   }).then((resp) => resp.json());

// ===== axios =====
axios.defaults.baseURL = 'http://localhost:8080';

export const getTodos = () => axios.get('/todos').then(({ data }) => data);

export const createTodo = (payload) =>
  axios.post('/todos', payload).then(({ data }) => data);

export const deleteTodo = (id) => axios.delete(`todos/${id}`).then(() => id);

export const updateTodo = (id, payload) =>
  axios.patch(`/todos/${id}`, payload).then(({ data }) => data);
