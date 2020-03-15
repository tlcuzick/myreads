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
    searchResults: [],
    showSearchPage: false,
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  clearSearchResults = () => {
    this.setState({searchResults: []})
  }

  updateBook = (bookToUpdate, shelf) => {
    const books = this.state.books.filter(({id}) => id === bookToUpdate.id);
    this.setState(currentState => {
      if(books.length === 0) {
        return {books: [...currentState.books, {...bookToUpdate, shelf}]};
      }
      else {
        const updatedBooks = currentState.books.map(book => {
          return book.id === bookToUpdate.id ? {...book, shelf: shelf} : book;
        })
        return {books: updatedBooks}
      }
    })
  }


  filterBook = (book, searchTerm) => {
    const title = book.hasOwnProperty('title') ? book.title.toLowerCase() : '';
    const authors = book.hasOwnProperty('authors') ? book.authors.join(' ').toLowerCase() : '';    
    const description = book.hasOwnProperty('description') ? book.description.toLowerCase() : '';
    
    return (
      title.includes(searchTerm.toLowerCase()) ||
      authors.includes(searchTerm.toLowerCase()) || 
      description.includes(searchTerm.toLowerCase())
    )
  }

  combineSearchResults = (searchTerm) => {
    const stateSearchResults = this.state.books.filter(book => this.filterBook(book, searchTerm));    
    const bookIDs = stateSearchResults.map(book => book.id);  
    
        			this.setState((currentState) => {
                      const searchResults = Array.from(currentState.searchResults)                      
                      const combinedResults = stateSearchResults.concat(
                        searchResults.filter(book => !(bookIDs.includes(book.id)))
                          .map(book => ({...book, shelf: "none"}))                      
                      )
                        return {searchResults: combinedResults}
                    })
  }

  updateSearchResults = (databaseSearchResults, searchTerm) => {    
		this.setState({searchResults: databaseSearchResults}, 
        	() => {
				this.combineSearchResults(searchTerm)         
        	})
  }

  searchBooks = searchTerm => {
        if(searchTerm.length > 0) {
        BooksAPI.search(searchTerm, 20)
          .then((databaseSearchResults) => {
            this.updateSearchResults(databaseSearchResults, searchTerm)
        })
        }
        else {
          this.clearSearchResults()
        }
  }

  render() {
    console.log(this.state.books)
    return (
      <div className="app">
        {this.state.showSearchPage ? (
		  <BookSearch
      	    searchBooks={this.searchBooks}
            books={this.state.searchResults}
            updateBook={this.updateBook}
            clearSearchResults={this.clearSearchResults}
            goHome={() => this.setState({ showSearchPage: false })}
		  />
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
