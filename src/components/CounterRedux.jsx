import { connect } from 'react-redux';
import {
  incrementAction,
  decrementAction,
  setStepAction,
} from '../reducer/counter/actions';

const CounterRedux = ({ value, step, increment, decrement, setStep }) => {
  return (
    <div className="counter-redux">
      <h4>Counter Redux</h4>
      <select value={step} onChange={(e) => setStep(Number(e.target.value))}>
        <option value="1">1</option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="50">50</option>
      </select>

      <button onClick={() => decrement(step)}>-</button>
      <span>{value}</span>
      <button onClick={() => increment(step)}>+</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  value: state.counter.value,
  step: state.counter.step,
});

const mapDispatchToProps = {
  increment: incrementAction,
  decrement: decrementAction,
  setStep: setStepAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterRedux);
