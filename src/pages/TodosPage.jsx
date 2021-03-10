import { useState, useEffect } from 'react';
import TodosInputForm from '../components/TodosInputForm';
import TodosList from '../components/TodosList';
import Modal from '../components/Modal';
// import Loader from '../components/Loader';
import ClipLoader from 'react-spinners/ClipLoader';
import {
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo,
} from '../utils/todosAPI';
import { toast } from 'react-toastify';

const TodosPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [todos, setTodos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentTodo, setCurrentTodo] = useState();

  const handleSubmit = (todo) => {
    if (todos.find(({ value }) => value === todo.value)) return;

    setIsLoading(true);

    createTodo(todo)
      .then((data) => setTodos((prevState) => [data, ...prevState]))
      .catch((error) =>
        toast(error.message, {
          type: 'error',
        }),
      )
      .finally(() => setIsLoading(false));
  };

  const handleDeleteTodo = (id) => {
    setCurrentTodo(todos.find((todo) => todo.id === id));
    setShowModal(true);
  };

  const handleCancelModal = () => {
    setShowModal(false);
  };

  const handleOkModal = () => {
    setShowModal(false);
    setIsLoading(true);

    deleteTodo(currentTodo.id)
      .then((id) =>
        setTodos((prevState) => prevState.filter((todo) => todo.id !== id)),
      )
      .then(() =>
        toast(`"${currentTodo.value}" is successfully deleted`, {
          type: 'success',
        }),
      )
      .catch((error) =>
        toast(error.message, {
          type: 'error',
        }),
      )
      .finally(() => setIsLoading(false));
  };

  const handleToggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id);

    setIsLoading(true);

    updateTodo(id, { isDone: !todo.isDone })
      .then((updatedToto) =>
        setTodos((prevState) =>
          prevState.map((todo) =>
            todo.id === updatedToto.id ? updatedToto : todo,
          ),
        ),
      )
      .catch((error) =>
        toast(error.message, {
          type: 'error',
        }),
      )
      .finally(() => setIsLoading(false));
  };

  // const handleSubmit = (data) => {
  //   const { firstName, lastName } = data;
  //   const updatedFirstName = `${firstName} fdghjkl`;

  //   const payload = {
  //     lastName,
  //     firstName: updatedFirstName,
  //   };

  //   fetch(payload);
  // };

  // componentDidMount
  useEffect(() => {
    setIsLoading(true);

    getTodos()
      .then((result) => setTodos(result))
      .catch((error) =>
        toast(error.message, {
          type: 'error',
        }),
      )
      .finally(() => setIsLoading(false));
  }, []);

  // didUpdate
  useEffect(() => {
    // localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="todos">
      <h1>Todos</h1>

      <ClipLoader loading={isLoading} />

      {!isLoading && (
        <>
          <TodosInputForm onSubmit={handleSubmit} />
          <TodosList
            todos={todos}
            onDelete={handleDeleteTodo}
            onToggle={handleToggleTodo}
          />
        </>
      )}

      {showModal && (
        <Modal onClose={handleCancelModal}>
          <>
            <h2>Do you really want to delete:</h2>
            <p>{currentTodo.value}</p>

            <div className="buttons">
              <button onClick={handleCancelModal}>Cancel</button>
              <button onClick={handleOkModal}>Ok</button>
            </div>
          </>
        </Modal>
      )}
    </div>
  );
};

export default TodosPage;
