import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';

class BookshelfChanger extends Component {
  state = {
    value: this.props.book.shelf
  };

  componentDidUpdate(prevProps) {
    if (prevProps.book.shelf !== this.props.book.shelf) {
      this.setState({ value: this.props.book.shelf });
    }
  }

  handleChange = event => {
    this.setState({ value: event.target.value }, () =>
      this.handleSubmit(this.props.book, this.state.value)
    );
  };

  handleSubmit = (bookToUpdate, shelf) => {
    this.props.updateBook(bookToUpdate, shelf);
    BooksAPI.update(bookToUpdate, shelf);
  };

  render() {
    return (
      <div className='book-shelf-changer'>
        <select value={this.state.value} onChange={this.handleChange}>
          <option disabled value='move'>
            Move to...
          </option>
          <option value='currentlyReading'>Currently Reading</option>
          <option value='wantToRead'>Want to Read</option>
          <option value='read'>Read</option>
          <option value='none'>None</option>
        </select>
      </div>
    );
  }
}

export default BookshelfChanger;
