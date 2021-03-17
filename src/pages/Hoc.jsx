import TestComponent2 from '../components/TestComponent2';
import Toggler from '../hoc/Toggler';

const Hoc = () => {
  return (
    <div className="hoc">
      <h1>HOC Demo</h1>

      <Toggler>
        {({ show, toggle }) => (
          <>
            <button onClick={toggle}>click me</button>
            {show && <TestComponent2 x={5} />}
          </>
        )}
      </Toggler>
    </div>
  );
};

export default Hoc;
