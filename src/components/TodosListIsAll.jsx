import { connect } from 'react-redux';
import TodosList from './TodosList';
import { getAllTodosSelector } from '../reducer/todos/selectors';

const mapStateToProps = (state) => ({
  todos: getAllTodosSelector(state),
});

export default connect(mapStateToProps)(TodosList);
