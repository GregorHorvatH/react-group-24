import React from 'react';
import TodoItem from './TodoItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  todosList: {
    overflow: 'auto',
    borderBottom: '1px solid black',
    marginBottom: 10,
  },
});

const TodosList = ({ label, todos }) => {
  const classes = useStyles();

  return (
    <div className={classes.todosList}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodosList;
