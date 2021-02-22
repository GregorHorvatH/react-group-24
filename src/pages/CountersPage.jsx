import { useState } from 'react';
import Counter from '../components/Counter';

const CountersPage = () => {
  const [counters, setCounters] = useState([]);

  const handleAddCounter = () => {
    setCounters((prevState) => [
      ...prevState,
      {
        id: Date.now(),
      },
    ]);
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

      {counters.map(({ id }) => (
        <Counter key={id} onDelete={() => handleDelete(id)} />
      ))}

      {/* <Counter value={5} />
      <Counter value={10} />
      <Counter /> */}
    </div>
  );
};

export default CountersPage;
