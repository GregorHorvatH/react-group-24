import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles({
  todoInputForm: {
    display: 'flex',
  },
  card: {
    backgroundColor: '#eeeeff',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  radioGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  form: {
    flex: 1,
  },
});

const TodoInputForm = ({ onSubmit }) => {
  const classes = useStyles();
  const [showForm, setShowForm] = useState(false);
  const [value, setValue] = useState(''); // input
  const [urgency, setUrgency] = useState('low'); // radio

  const toggleShowForm = () => setShowForm((prevState) => !prevState);
  const handleInputChange = (e) => setValue(e.target.value);
  const handleUrgencyChange = (e) => setUrgency(e.target.value);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!value) return;

    const newTodo = {
      id: uuid(),
      date: Date.now(),
      value,
      urgency,
    };

    setValue('');
    setUrgency('low');
    setShowForm(false);

    onSubmit(newTodo);
  };

  return (
    <div className={classes.todoInputForm}>
      {showForm ? (
        <form className={classes.form} onSubmit={handleAddTodo}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <TextField
                label="Enter todo"
                value={value}
                onChange={handleInputChange}
              />

              <FormControl className={classes.radioGroup} component="fieldset">
                <FormLabel>urgency:</FormLabel>

                <RadioGroup
                  row
                  aria-label="urgency"
                  name="urgency"
                  value={urgency}
                  onChange={handleUrgencyChange}
                >
                  <FormControlLabel
                    value="low"
                    control={<Radio />}
                    label="low"
                  />
                  <FormControlLabel
                    value="medium"
                    control={<Radio />}
                    label="medium"
                  />
                  <FormControlLabel
                    value="high"
                    control={<Radio />}
                    label="high"
                  />
                </RadioGroup>
              </FormControl>
            </CardContent>
            <CardActions className={classes.cardActions}>
              <Button size="small" onClick={toggleShowForm}>
                Cancel
              </Button>
              <Button
                size="small"
                color="primary"
                variant="contained"
                type="submit"
              >
                Add Todo
              </Button>
            </CardActions>
          </Card>
        </form>
      ) : (
        <Button
          className={classes.form}
          variant="contained"
          color="primary"
          onClick={toggleShowForm}
        >
          + Add Todo
        </Button>
      )}
    </div>
  );
};

export default TodoInputForm;
