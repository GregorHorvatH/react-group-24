const Form = (props) => (
  <>
    <label htmlFor="trololo">
      <input type="text" id="trololo" />
    </label>
    <button onClick={props.sayHello}>Push me</button>
  </>
);

export default Form;
