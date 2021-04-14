const CounterContext = ({ value = 0, onIncrement, onDecrement, onDelete }) => {
  return (
    <div className="counter">
      <button data-testid="decrement" onClick={onDecrement}>
        -
      </button>
      <span data-testid="value">{value}</span>
      <button data-testid="increment" onClick={onIncrement}>
        +
      </button>

      <button data-testid="delete" onClick={onDelete}>
        X
      </button>
    </div>
  );
};

export default CounterContext;

export const sum = (a, b) => a + b; // 1 + 2 = 3
