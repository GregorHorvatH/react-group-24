import { connect } from 'react-redux';
import TodosList from './TodosList';
import { getNotDoneTodosSelector } from '../reducer/todos/selectors';

// const getNotDoneTodosSelector = (state) =>
//   state.todos.items.filter(({ isDone }) => !isDone);

const mapStateToProps = (state) => ({
  todos: getNotDoneTodosSelector(state),
});

export default connect(mapStateToProps)(TodosList);
