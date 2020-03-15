import React from 'react';
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf';

const BookSelections = props => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
				<BookShelf
  				  books={props.books}
				  shelf={'currentlyReading'}
				  shelfTitle={'Currently Reading'}
				  updateBook={props.updateBook}
				/>
				<BookShelf
  				  books={props.books}
				  shelf={'wantToRead'}
				  shelfTitle={'Want to Read'}
				  updateBook={props.updateBook}
				/>
				<BookShelf
  				  books={props.books}
				  shelf={'read'}
				  shelfTitle={'Read'}
				  updateBook={props.updateBook}
				/>
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
);

export default BookSelections;