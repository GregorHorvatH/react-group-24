import TodoItem from './TodoItem';
import { makeStyles } from '@material-ui/core/styles';
// import cat from '../images/cat.jpg';

const useStyles = makeStyles({
  todosList: {
    // background: `url(${cat})`,
  },
});

const TodosList = ({ todos, onDelete, onToggle }) => {
  const classes = useStyles();

  return (
    <div className={classes.todosList}>
      {/* <img src={cat} alt="cat" width="200px" /> */}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TodosList;
