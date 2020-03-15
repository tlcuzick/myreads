import React, {Component} from 'react';
import BookGrid from './BookGrid';
import SearchForm from './SearchForm';

class BookSearch extends Component {
  componentDidMount() {
    this.props.clearSearchResults()
  }
  
  render() {
    const {goHome, searchBooks, books, updateBook} = this.props
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={goHome}>
            Close
          </a>
          <SearchForm 
            searchBooks={searchBooks}
          />
        </div>
        <div className="search-books-results">
          <BookGrid books={books} updateBook={updateBook} />
        </div>
      </div>
    )    
  }
}

export default BookSearch;