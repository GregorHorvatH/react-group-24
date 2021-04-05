import { createUseStyles } from 'react-jss';
import TodosInputForm from '../components/TodosInputForm';
// import TodosListIsDone from '../components/TodosListIsDone';
// import TodosListIsNotDone from '../components/TodosListIsNotDone';
import TodosListIsAll from '../components/TodosListIsAll';
import TodoCount from '../components/TodoCount';
import CounterRedux from '../components/CounterRedux';

const useStyles = createUseStyles({
  todos: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
});

const TodosPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.todos}>
      <CounterRedux />

      <h1>Todos</h1>
      <TodoCount />
      <TodosInputForm />

      <TodosListIsAll label="all" />

      {/* <TodosListIsDone label="IS DONE" />
      <TodosListIsNotDone label="NOT DONE" /> */}
    </div>
  );
};

export default TodosPage;
