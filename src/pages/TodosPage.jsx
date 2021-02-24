import { useState } from 'react';
import TodoInputForm from '../components/TodoInputForm';
import TodoList from '../components/TodoList';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  todosWrapper: {
    // border: '1px solid black',
    display: 'flex',
    flexDirection: 'column',
    // padding: 10,
    // minWidth: 300,
    width: 400,
  },
});

const TodosPage = () => {
  const classes = useStyles();
  const [todos, setTodos] = useState([]);

  const handleSubmit = (todo) => setTodos((prevState) => [...prevState, todo]);

  const handleToggleTodo = (id) =>
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

  const handleDeleteTodo = (id) =>
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));

  return (
    <div className="todos">
      <h1>Todos</h1>

      <div className={classes.todosWrapper}>
        <TodoInputForm onSubmit={handleSubmit} />
        <TodoList
          todos={todos}
          onToggle={handleToggleTodo}
          onDelete={handleDeleteTodo}
        />
      </div>
    </div>
  );
};

export default TodosPage;
