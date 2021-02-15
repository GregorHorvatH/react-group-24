import React from 'react';
import BookList from '../components/BookList';

const books = [
  { id: 'id-1', name: 'JS for beginners' },
  { id: 'id-2', name: 'React basics' },
  { id: 'id-3', name: 'React Router overview' },
  { id: 'id-4', name: 'Redux in depth' },
  { id: 'id-5', name: 'Harry Potter' },
];

const BooksPage = () => <BookList books={books} />;

export default BooksPage;
