import React from 'react';
import BookCard from './BookCard';

const BookShelf = props => {
  const { books, shelf, shelfTitle, updateBook } = props;
  const bookCards = books.filter(book => book.shelf === shelf)
  	.map(book => {
      return (
                      <li>
						<BookCard
                          book={book}
         				  updateBook={updateBook}
						/>
					  </li>
      )
    })
  						  
  return (
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{shelfTitle}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
				      {bookCards}
                    </ol>
                  </div>
                </div>
  )
}

export default BookShelf;