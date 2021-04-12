import { useReducer } from 'react';
import { createUseStyles } from 'react-jss';
import CounterContext from '../components/CounterContext';
import Context from './hooksContext';
import MovieSearch from '../components/MovieSearch';

const useStyles = createUseStyles({
  sentence: {
    color: 'red',

    '@media (max-width: 800px)': {
      display: 'none',
    },
  },
});

const initialState = {
  value: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'counter/increment':
      return {
        ...state,
        value: state.value + 1,
      };

    case 'counter/decrement':
      return {
        ...state,
        value: state.value - 1,
      };

    default:
      return state;
  }
};

const Hooks = () => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="hooks">
      <h2>Hooks</h2>
      <p className={classes.sentence}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, expedita
        quaerat blanditiis sunt exercitationem reiciendis consequuntur eaque
        distinctio magnam quos ratione laborum doloribus quibusdam culpa maxime,
        deserunt tempora veniam quidem!
      </p>

      <Context.Provider value={{ state, dispatch }}>
        <CounterContext />
      </Context.Provider>

      <MovieSearch />
    </div>
  );
};

export default Hooks;
