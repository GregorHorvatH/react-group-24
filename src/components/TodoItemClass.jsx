import { Component } from 'react';
import moment from 'moment';
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

class TodoItemClass extends Component {
  componentDidUpdate() {
    console.log('render:', this.props.todo.id);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.todo.isDone !== this.props.todo.isDone;
  }

  render() {
    const {
      todo: { id, value, urgency, date, isDone },
      onToggle,
      onDelete,
    } = this.props;
    const formattedDate = moment(date).format('YYYY/MM/DD hh:mm:ss');

    return (
      <Card>
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
              onChange={() => onToggle(id)}
              color="primary"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />

            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={() => onDelete(id)}
            >
              <DeleteTwoToneIcon />
            </IconButton>
          </CardActions>
        </CardActionArea>
      </Card>
    );
  }
}

export default TodoItemClass;
