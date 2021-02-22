import { useState } from 'react';

const Counter = ({ value = 0, onDelete }) => {
  const [count, setCount] = useState(value); // [value, setValue]

  const handleDecrement = () => setCount(count - 1);
  const handleIncrement = () => setCount(count + 1);

  return (
    <div className="counter">
      <button onClick={handleDecrement}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrement}>+</button>

      <button onClick={onDelete}>X</button>
    </div>
  );
};

// Counter.defaultProps = {
//   value: 0,
// };

export default Counter;
