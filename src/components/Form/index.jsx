const Form = ({ sayHello, someComponent: SomeComponent }) => (
  <>
    <label htmlFor="trololo">
      <input type="text" id="trololo" />
    </label>
    <button onClick={sayHello}>Push me</button>

    <SomeComponent />
  </>
);

export default Form;
