import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookSearch from './BookSearch.js'
import BookSelections from './BookSelections'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    bookIDs: {},
    searchResults: [],
    showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  updateBook = (bookToUpdate, shelf) => {
    const books = this.state.books.filter(({id}) => id === bookToUpdate.id);
    this.setState(currentState => {
      if(books.length === 0) {
        return {books: [...currentState.books, bookToUpdate]}
      }
      else {
        const updatedBooks = currentState.books.map(book => {
          return book.id === bookToUpdate.id ? {...book, shelf: shelf} : book;
        })
        return {books: updatedBooks}
      }
    })
  }



  searchBooks = searchTerm => {
    BooksAPI.search(searchTerm, 20)
      .then((searchResults) => {
        this.setState(() => ({
          searchResults
        }))
      })  
  }


  render() {
    console.log(this.state.books)
    return (
      <div className="app">
        {this.state.showSearchPage ? (
		  <BookSearch goHome={() => this.setState({ showSearchPage: false })} />
        ) : (
		  <BookSelections 
            books={this.state.books} 
            updateBook={this.updateBook}
            search={() => this.setState({ showSearchPage: true })} 
          />
        )}
      </div>
    )
  }
}

export default BooksApp
