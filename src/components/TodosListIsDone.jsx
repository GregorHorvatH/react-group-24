import { connect } from 'react-redux';
import TodosList from './TodosList';
import { getDoneTodosSelector } from '../reducer/todos/selectors';

// const getDoneTodosSelector = (state) =>
//   state.todos.items.filter(({ isDone }) => isDone);

const mapStateToProps = (state) => ({
  todos: getDoneTodosSelector(state),
});

export default connect(mapStateToProps)(TodosList);
