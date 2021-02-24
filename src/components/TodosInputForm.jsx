import { useState } from 'react';
import { createUseStyles } from 'react-jss';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = createUseStyles({
  todosInputForm: {
    display: 'flex',
    flexDirection: 'column',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

const TodosInputForm = ({ onSubmit }) => {
  const classes = useStyles();
  const [showForm, setShowForm] = useState(false);
  const [value, setValue] = useState('');
  const [urgency, setUrgency] = useState('low');

  const toggleForm = () => setShowForm((prevValue) => !prevValue);
  const handleInputChange = (e) => setValue(e.target.value);
  const handleUrgencyChange = (e) => setUrgency(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) return;

    const newTodo = {
      id: Date.now(),
      date: Date.now(),
      isDone: false,
      value,
      urgency,
    };

    onSubmit(newTodo);
    setValue('');
    setUrgency('low');
    setShowForm(false);
  };

  return (
    <div className={classes.todosInputForm}>
      {showForm ? (
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            label="Enter todo"
            value={value}
            onChange={handleInputChange}
          />

          <div>
            <span>urgency:</span>

            <label>
              <input
                type="radio"
                value="low"
                checked={urgency === 'low'}
                onChange={handleUrgencyChange}
              />
              <span>low</span>
            </label>

            <label>
              <input
                type="radio"
                value="medium"
                checked={urgency === 'medium'}
                onChange={handleUrgencyChange}
              />
              <span>medium</span>
            </label>

            <label>
              <input
                type="radio"
                value="high"
                checked={urgency === 'high'}
                onChange={handleUrgencyChange}
              />
              <span>high</span>
            </label>
          </div>

          <div className={classes.buttons}>
            <Button color="primary" onClick={toggleForm}>
              Cancel
            </Button>

            <Button variant="contained" color="primary" type="submit">
              Add todo
            </Button>
          </div>
        </form>
      ) : (
        <Button variant="contained" color="primary" onClick={toggleForm}>
          + Add todo
        </Button>
      )}
    </div>
  );
};

export default TodosInputForm;
