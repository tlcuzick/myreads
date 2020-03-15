import React from 'react';
import BookCard from './BookCard';

const BookGrid = props => {
  const books = Array.from(props.books);
  const bookCards = books.map(book => {
    return (
      <li key={book.id}>
        <BookCard book={book} updateBook={props.updateBook} />
      </li>
    );
  });

  return <ol className='books-grid'>{bookCards}</ol>;
};

export default BookGrid;
