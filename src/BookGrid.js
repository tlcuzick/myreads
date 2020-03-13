import React from 'react';
import BookCard from './BookCard';

const BookGrid = props => {
  const bookCards = props.books.map(book => (
    <li>
      <BookCard
	    backgroundImage={book.backgroundImage}
	    bookTitle={book.bookTitle}
	  />   
    </li>
  ))

  return (
    <ol className="books-grid">
      {bookCards}
    </ol>
  )

}

export default BookGrid;