import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Checkbox,
  Divider,
} from '@material-ui/core';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import { toggleTodo, deleteTodo, editTodo } from '../reducer/todos/actions';

const useStyles = makeStyles({
  todosItem: {
    marginTop: 10,
  },
});

const TodosItem = ({ todo: { id, value, urgency, date, isDone } }) => {
  const classes = useStyles();
  const formattedDate = moment(date).format('YYYY/MM/DD hh:mm:ss');
  const [text, setText] = useState(value || '');
  const [isChanged, setChange] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTodo(id));
  const handleToggle = () => dispatch(toggleTodo(id));
  const handleChangeText = (e) => {
    setText(e.target.value);
    setChange(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      editTodo({
        id,
        value: text,
      }),
    );
    setChange(false);
  };

  return (
    <Card className={classes.todosItem}>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <input type="text" value={text} onChange={handleChangeText} />
          <p>urgent: {urgency}</p>
          <p>{formattedDate}</p>

          <button disabled={!isChanged} type="submit">
            Save
          </button>
        </form>
      </CardContent>

      <Divider />
      <CardActions>
        <Checkbox
          checked={isDone}
          onChange={handleToggle}
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />

        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
          onClick={handleDelete}
        >
          <DeleteTwoToneIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

const areEqual = (prevProps, nextProps) => {
  return prevProps.todo.isDone === nextProps.todo.isDone;
};

export default React.memo(TodosItem, areEqual);
