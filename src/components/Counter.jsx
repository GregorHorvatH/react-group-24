const CounterContext = ({ value = 0, onIncrement, onDecrement, onDelete }) => {
  return (
    <div className="counter">
      <button onClick={onDecrement}>-</button>
      <span>{value}</span>
      <button onClick={onIncrement}>+</button>

      <button onClick={onDelete}>X</button>
    </div>
  );
};

export default CounterContext;
