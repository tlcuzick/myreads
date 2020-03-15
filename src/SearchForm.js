import React, {Component} from 'react';

class SearchForm extends Component {
  state = {
    searchTerm: ''
  }

  handleChange = event => {
    this.setState({searchTerm: event.target.value}, () => {
      this.props.searchBooks(this.state.searchTerm)
    })
  }

  render() {
    return (
      <div className="search-books-input-wrapper">
        <input type="text" 
          placeholder="Search by title or author"
          value={this.state.searchTerm}
      	  onChange={this.handleChange}
        />
      </div>    
    )
  }
}

export default SearchForm;