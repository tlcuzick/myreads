import React from 'react';
import BookGrid from './BookGrid';

const BookShelf = props => {
  const { books, shelf, shelfTitle, updateBook } = props;
  const categorizedBooks = books.filter(book => book.shelf === shelf);
  						  
  return (
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{shelfTitle}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
				      <BookGrid books={categorizedBooks} updateBook={updateBook} />
                    </ol>
                  </div>
                </div>
  )
}

export default BookShelf;