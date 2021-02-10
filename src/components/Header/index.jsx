import PropTypes from 'prop-types';

const Header = (props) => {
  const { someNumber, someText } = props;

  console.log('someNumber:', someNumber);

  return (
    <>
      <h1>Hello From React {someNumber}</h1>
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
