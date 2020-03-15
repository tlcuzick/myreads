import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookGrid from './BookGrid';
import SearchForm from './SearchForm';

class BookSearch extends Component {
  componentDidMount() {
    this.props.clearSearchResults();
  }

  render() {
    const { searchBooks, books, updateBook } = this.props;
    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link to='/' className='close-search'>
            Close
          </Link>
          <SearchForm searchBooks={searchBooks} />
        </div>
        <div className='search-books-results'>
          <BookGrid books={books} updateBook={updateBook} />
        </div>
      </div>
    );
  }
}

export default BookSearch;