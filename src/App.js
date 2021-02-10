import Header from './components/Header';
import Form from './components/Form';
import NewComponent from './components/NewComponent';

function App() {
  const x = 73;

  const sayHello = () => console.log('Hello');

  return (
    <div className="App">
      <Header someNumber={x} />

      <NewComponent>
        <h1>Test</h1>
      </NewComponent>

      <Form sayHello={sayHello} />
    </div>
  ); // JSX - JavaScript Syntax Extension
}

export default App;
