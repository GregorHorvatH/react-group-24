import { compose } from 'recompose';
import withHigherOrderComponent from '../hoc/withHigherOrderComponent';
import withLog from '../hoc/withLog';

const TestComponent2 = ({ myParam }) => {
  return (
    <div className="test-component-2">
      <h4>Test Component 2</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur,
        natus. Esse rerum eius unde consequatur nam corrupti, quae omnis
        doloribus ab. At, voluptatibus ipsam dolor est magni tenetur officia
        praesentium.
      </p>
      <p>{myParam}</p>
    </div>
  );
};

export default compose(withHigherOrderComponent, withLog)(TestComponent2);

// export default withHigherOrderComponent(withLog(TestComponent2));
