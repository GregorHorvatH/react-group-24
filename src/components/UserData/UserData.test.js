import { render } from '@testing-library/react';
import UserData from './';

const user = {
  firstName: 'Bobbovych',
  lastName: 'Bobby',
  email: 'bobby@gmail.com',
  age: 15,
};

describe('UserData', () => {
  test('should not blow up', () => {
    const { container } = render(<UserData user={user} />);

    expect(container).toMatchSnapshot();
  });

  test('should have 4 ps', () => {
    const { container } = render(<UserData user={user} />);

    expect(container.querySelectorAll('p').length).toEqual(4);
  });

  test('should have Bobby as lastname', () => {
    const { getByTestId } = render(<UserData user={user} />);

    expect(getByTestId('lastname').textContent).toEqual('LastName: Bobby');
  });
});

// import { sum } from './utils';

// describe('sum should work correctly', () => {
//   test('(1+1)', () => {
//     const result = sum(1, 1);

//     expect(result).toEqual(2);
//   });

//   test('(2+5)', () => {
//     expect(sum(2, 5)).toEqual(7);
//   });

//   test('(-10+15)', () => {
//     expect(sum(-10, 15)).toEqual(5);
//   });
// });
