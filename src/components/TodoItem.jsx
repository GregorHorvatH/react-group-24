import React from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Checkbox,
  CardActionArea,
  Divider,
} from '@material-ui/core';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';

const useStyles = makeStyles({
  todosItem: {
    marginTop: 10,
    backgroundColor: 'rgba(255,255,255,0)',
  },
});

const TodosItem = ({
  todo: { id, value, urgency, date, isDone },
  onToggle,
  onDelete,
}) => {
  const classes = useStyles();
  const formattedDate = moment(date).format('YYYY/MM/DD hh:mm:ss');

  const handleDelete = () => onDelete(id);
  const handleToggle = () => onToggle(id);

  console.log('render:', id);

  return (
    <Card className={classes.todosItem}>
      <CardActionArea>
        <CardContent>
          <p>{value}</p>
          <p>{urgency}</p>
          <p>{formattedDate}</p>
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
      </CardActionArea>
    </Card>
  );
};

const areEqual = (prevProps, nextProps) => {
  return prevProps.todo.isDone === nextProps.todo.isDone;
};

export default React.memo(TodosItem, areEqual);
