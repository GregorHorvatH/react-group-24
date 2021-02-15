import React from 'react';
import PropTypes from 'prop-types';

const BookItem = ({ book }) => (
  <li>
    <h3>{book.name}</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </li>
);

BookItem.propTypes = {
  book: PropTypes.shape({
    name: PropTypes.string,
  }),
  // book: PropTypes.exact({
  //   id: PropTypes.string,
  //   name: PropTypes.string,
  // }),
};

export default BookItem;
