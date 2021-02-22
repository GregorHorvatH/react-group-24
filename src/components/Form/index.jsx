const Form = ({ sayHello, someComponent: SomeComponent }) => {
  const handleInputChange = (e) => {
    // const x = e.target.value;

    setTimeout(() => {
      console.log('value:', e.target.value);
    }, 10);
  };

  return (
    <>
      <label htmlFor="trololo">
        <input type="text" id="trololo" onChange={handleInputChange} />
      </label>
      <button onClick={sayHello}>Push me</button>

      <SomeComponent />
    </>
  );
};

export default Form;
