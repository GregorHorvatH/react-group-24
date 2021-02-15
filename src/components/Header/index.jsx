import PropTypes from 'prop-types';

const Header = (props) => {
  const { someNumber, someText, age } = props;
  const isMoreThenTen = someNumber > 10;
  const is18 = age >= 18;

  // console.log('someNumber:', someNumber);

  return (
    <>
      {isMoreThenTen ? (
        <h1>{someNumber} more then 10</h1>
      ) : (
        <h1>{someNumber} less then 10</h1>
      )}

      {!is18 ? <p>Not 18+ yet!!!</p> : null}
      {/* {!is18 && <p>Not 18+ yet!!!</p>} */}

      <p>Hello {someText}!</p>
    </>
  );
};

Header.propTypes = {
  someNumber: PropTypes.number.isRequired,
};

Header.defaultProps = {
  someText: 'Anonymous',
  someNumber: 15,
};

export default Header;
