import { useState, useEffect } from 'react';
import TodosInputForm from '../components/TodosInputForm';
import TodosList from '../components/TodosList';

const TodosPage = () => {
  const [todos, setTodos] = useState([]);

  const handleSubmit = (todo) => {
    if (todos.find(({ value }) => value === todo.value)) return;

    setTodos((prevState) => [todo, ...prevState]);
  };

  const handleDeleteTodo = (id) =>
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));

  const handleToggleTodo = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              isDone: !todo.isDone,
            }
          : todo,
      ),
    );
  };

  // didMount
  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem('todos')));
  }, []);

  // didUpdate
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="todos">
      <h1>Todos</h1>

      <TodosInputForm onSubmit={handleSubmit} />
      <TodosList
        todos={todos}
        onDelete={handleDeleteTodo}
        onToggle={handleToggleTodo}
      />
    </div>
  );
};

export default TodosPage;
