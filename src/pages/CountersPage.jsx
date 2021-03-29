import { useState } from 'react';
import Counter from '../components/Counter';
import CounterRedux from '../components/CounterRedux';

const CountersPage = () => {
  const [counters, setCounters] = useState([]);

  const handleAddCounter = () => {
    const lastCounter = !!counters.length ? counters[counters.length - 1] : {};

    setCounters((prevState) => [
      ...prevState,
      {
        value: 0,
        ...lastCounter,
        id: Date.now(),
      },
    ]);
  };

  const handleIncrement = (id) => {
    setCounters((prevState) =>
      prevState.map((counter) =>
        counter.id === id
          ? {
              ...counter,
              value: counter.value + 1,
            }
          : counter,
      ),
    );
  };

  const handleDecrement = (id) => {
    setCounters((prevState) =>
      prevState.map((counter) =>
        counter.id === id
          ? {
              ...counter,
              value: counter.value - 1,
            }
          : counter,
      ),
    );
  };

  const handleDelete = (id) => {
    setCounters((prevState) =>
      prevState.filter((counter) => counter.id !== id),
    );
  };

  return (
    <div className="counters">
      <h1>Counters</h1>

      <button onClick={handleAddCounter}>Add a counter</button>

      {counters.map(({ id, value }) => (
        <Counter
          key={id}
          value={value}
          onIncrement={() => handleIncrement(id)}
          onDecrement={() => handleDecrement(id)}
          onDelete={() => handleDelete(id)}
        />
      ))}

      <CounterRedux />
      {/* <Counter value={5} />
      <Counter value={10} />
      <Counter /> */}
    </div>
  );
};

export default CountersPage;
