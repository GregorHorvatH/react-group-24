import { Fragment, useState } from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import NewComponent from '../components/NewComponent';
import TestComponent from '../components/TestComponent';
import Timer from '../components/TimerHook';
import Video from '../components/Video';

const TestPage = () => {
  const [showTimer, setShowTimer] = useState(false);
  const x = 3;
  const sayHello = () => console.log('Hello');

  const toggleShowTimer = () => setShowTimer((prev) => !prev);

  return (
    <Fragment>
      <Header someNumber={x} age={19} />
      {/*
      <NewComponent>
        <h1>Test</h1>
      </NewComponent>

      <Form sayHello={sayHello} someComponent={TestComponent} />

      <button onClick={toggleShowTimer}>timer</button>
      {showTimer && <Timer />} */}

      <Video />
    </Fragment>
  );
};

export default TestPage;
