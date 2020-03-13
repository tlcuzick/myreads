import React from 'react';
import BookGrid from './BookGrid';

const BookSearch = props => (
  <div className="search-books">
    <div className="search-books-bar">
      <a className="close-search" onClick={props.goHome}>
        Close
      </a>
      <div className="search-books-input-wrapper">
        <input type="text" placeholder="Search by title or author" />
      </div>
    </div>
    <div className="search-books-results">
      <ol className="books-grid"></ol>
    </div>
  </div>
);

export default BookSearch;