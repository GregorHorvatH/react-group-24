import { render } from '@testing-library/react';
import Counter, { sum } from './index';

describe('sum should not blow up', () => {
  it('sum(1, 2) should be 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('sum(-1, 2) should be 1', () => {
    expect(sum(-1, 2)).toBe(1);
  });

  it('sum(0, 0) should be 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
});

describe('Counter', () => {
  it('Counter should render properly', () => {
    const { container } = render(<Counter value={10} />);

    expect(container).toMatchSnapshot();
  });

  it('Button decrement should call onDecrement', () => {
    const onDecrement = jest.fn();
    const { getByTestId } = render(
      <Counter value={10} onDecrement={onDecrement} />,
    );

    getByTestId('decrement').click();

    expect(onDecrement).toBeCalled();
  });

  it('Button increment should call onIncrement', () => {
    const onIncrement = jest.fn();
    const { getByTestId } = render(
      <Counter value={10} onIncrement={onIncrement} />,
    );

    getByTestId('increment').click();

    expect(onIncrement).toBeCalled();
  });

  it('Button delete should call onDelete', () => {
    const onDelete = jest.fn();
    const { getByTestId } = render(<Counter value={10} onDelete={onDelete} />);

    getByTestId('delete').click();

    expect(onDelete).toBeCalled();
  });

  it('The default value should be 0', () => {
    const { getByTestId } = render(<Counter />);

    const value = getByTestId('value').textContent;

    expect(value).toBe('0');
  });

  it('value should be 10', () => {
    const { getByTestId } = render(<Counter value={10} />);

    const value = getByTestId('value').textContent;

    expect(value).toBe('10');
  });
});
