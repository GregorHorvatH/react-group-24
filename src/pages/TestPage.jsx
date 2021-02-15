import { Fragment } from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import NewComponent from '../components/NewComponent';
import TestComponent from '../components/TestComponent';

const TestPage = () => {
  const x = 3;
  const sayHello = () => console.log('Hello');

  return (
    <Fragment>
      <Header someNumber={x} age={19} />

      <NewComponent>
        <h1>Test</h1>
      </NewComponent>

      <Form sayHello={sayHello} someComponent={TestComponent} />
    </Fragment>
  );
};

export default TestPage;
