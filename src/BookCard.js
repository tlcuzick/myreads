import React from 'react';
import BookshelfChanger from './BookshelfChanger';

const BookCard = props => {
  const {bookTitle, bookAuthors} = props.book;
  return (
                        <div className="book">
                          <div className="book-top">
                            <div 
  							  className="book-cover" 
  							  style={
  								{ 
  								  width: 128, 
  								  height: 188, 
  								  backgroundImage: `url(${props.book.imageLinks.thumbnail})`
  								}
							  }
							>
						    </div>
                            <BookshelfChanger updateBook={props.updateBook} book={props.book} />
                          </div>
                          <div className="book-title">{bookTitle}</div>
                          <div className="book-authors">{bookAuthors}</div>
                        </div>
  )
}

export default BookCard;