import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../reducer/store';
import { incrementAction } from '../reducer/counter/actions';
import reducer from '../reducer/counter/reducer';

import CounterRedux from './CounterRedux';

describe('CounterRedux', () => {
  it('should render', () => {
    const { container } = render(
      <Provider store={store}>
        <CounterRedux />
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('incrementAction should return a new object', () => {
    expect(incrementAction(123)).toMatchObject({
      type: 'counter/increment',
      payload: 123,
    });
  });

  it('reducer', () => {
    const initialState = {
      value: 1,
      step: 1,
    };

    const action = { type: 'counter/increment' };
    const newState = reducer(initialState, action);

    expect(newState).toMatchObject({
      value: 2,
      step: 1,
    });
  });
});
