import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';

const BookList = ({ books }) => (
  <ul>
    {books.map((book) => (
      <BookItem key={book.id} book={book} />
    ))}
  </ul>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      // name: PropTypes.string,
    }),
  ),
};

BookList.defaultProps = {
  books: [],
};

export default BookList;
