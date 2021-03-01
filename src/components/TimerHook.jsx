import { useState, useEffect } from 'react';

const TimerHook = ({ x, y }) => {
  const [value, setValue] = useState(new Date());

  // componentDidMount
  useEffect(() => {
    const id = setInterval(() => {
      setValue(new Date());
    }, 1000);

    // componentWillUnMount
    return () => {
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    console.log('componentDidUpdate');
  }); // after every render - componentDidUpdate

  useEffect(() => {
    console.log('X is changed');
  }, [x]);

  useEffect(() => {
    console.log('Y is changed');
  }, [y]);

  console.log('render');

  return (
    <div className="timer">
      <p>{value.toTimeString()}</p>
    </div>
  );
};

export default TimerHook;
