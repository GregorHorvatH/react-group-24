import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const useStyles = makeStyles({
  todoItem: {
    backgroundColor: '#ffeeff',
    marginTop: 10,
    position: 'relative',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  low: {
    backgroundColor: '#d8e8cf',
  },
  medium: { backgroundColor: '#e6decc' },
  high: {
    backgroundColor: '#e8d0ca',
  },
});

const TodoItem = ({ todo, onToggle, onDelete }) => {
  const classes = useStyles();
  const { id, value, isDone, date, urgency } = todo;

  const handleToggle = () => onToggle(id);
  const handleDelete = () => onDelete(id);

  return (
    <Card className={[classes.todoItem, classes[urgency]].join(' ')}>
      <CardContent>
        <p>{value}</p>
        <p>urgency: {urgency}</p>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <span>{moment(date).format('YYYY/MM/DD hh:mm:ss')}</span>

        <label>
          <input type="checkbox" onChange={handleToggle} value={isDone} />
          <span>mark as done</span>
        </label>

        <IconButton
          color="primary"
          aria-label="delete todo"
          component="span"
          onClick={handleDelete}
        >
          <DeleteOutlineIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default TodoItem;
