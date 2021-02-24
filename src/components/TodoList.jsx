import { makeStyles } from '@material-ui/core/styles';
import TodoItem from './TodoItem';

const useStyles = makeStyles({
  todoList: {},
  todoItem: {
    marginTop: 10,
  },
});

const TodoList = ({ todos, onToggle, onDelete }) => {
  const classes = useStyles();

  return (
    <div className={classes.todoList}>
      {todos.map((toodo) => (
        <TodoItem
          key={toodo.id}
          todo={toodo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TodoList;
