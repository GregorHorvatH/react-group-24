import React, { useState } from 'react';
import PropHeader from '../components/PropHeader';
import PropBody from '../components/PropBody';

const PropsTestPage = () => {
  const [value, setValue] = useState(0);

  const handleDecrement = () => setValue((prevValue) => prevValue - 1);
  const handleIncrement = () => setValue((prevValue) => prevValue + 1);

  return (
    <>
      <PropHeader onDecrement={handleDecrement} onIncrement={handleIncrement} />
      <PropBody value={value} />
    </>
  );
};

export default PropsTestPage;
