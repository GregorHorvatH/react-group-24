import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Divider from '@material-ui/core/Divider';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles({
  todoItem: {
    backgroundColor: '#ffeeff',
    marginTop: 10,
    position: 'relative',
  },
  cardContent: {
    display: 'flex',
    alignItems: 'center',
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
  const color =
    urgency === 'high'
      ? 'secondary'
      : urgency === 'medium'
      ? 'action'
      : 'primary';

  return (
    <Card className={[classes.todoItem, classes[urgency]].join(' ')}>
      <CardActionArea onClick={handleToggle}>
        <CardContent className={classes.cardContent}>
          <BookmarkIcon
            color={color}
            style={isDone ? { color: green[500] } : null}
          />
          <span>{value}</span>
        </CardContent>

        <Divider />
        <CardActions className={classes.cardActions}>
          <span>{moment(date).format('YYYY/MM/DD hh:mm:ss')}</span>

          <label>
            <input type="checkbox" onChange={handleToggle} checked={isDone} />
            <span>mark as done</span>
          </label>

          <IconButton
            color="primary"
            aria-label="delete todo"
            component="span"
            onClick={handleDelete}
          >
            <DeleteOutlineIcon fontSize="small" />
          </IconButton>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default TodoItem;
