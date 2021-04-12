import { useContext } from 'react';
import Context from '../pages/hooksContext';

const CounterContext = () => {
  const { state, dispatch } = useContext(Context);
  const { value } = state;

  const handleIncrement = () =>
    dispatch({
      type: 'counter/increment',
    });

  const handleDecrement = () =>
    dispatch({
      type: 'counter/decrement',
    });

  console.log('render Counter');

  return (
    <div className="counter">
      <button onClick={handleDecrement}>-</button>
      <span>{value}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default CounterContext;
