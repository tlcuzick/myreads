import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookSearch from './BookSearch.js'
import BookSelections from './BookSelections'
import {filterBook} from './utils'

class BooksApp extends React.Component {
  state = {
    books: [],
    searchResults: []
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
          return book.id === bookToUpdate.id ? {...book, shelf} : book;
        })
        return {books: updatedBooks}
      }
    })
  }

  combineSearchResults = searchTerm => {
     const stateSearchResults = this.state.books.filter(book => filterBook(book, searchTerm));    
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
    return (
      <div className="app">
       
        <Route exact path='/' render={() => (
		  <BookSelections 
            books={this.state.books} 
            updateBook={this.updateBook}
          />
        )} />

        <Route path='/search' render={() => (
		  <BookSearch
      	    searchBooks={this.searchBooks}
            books={this.state.searchResults}
            updateBook={this.updateBook}
            clearSearchResults={this.clearSearchResults}
		  />
        )} />
      </div>
    )
  }
}

export default BooksApp
