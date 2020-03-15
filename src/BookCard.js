import React from 'react';
import BookshelfChanger from './BookshelfChanger';

const BookCard = props => {
  const {title, authors} = props.book;
  const authorsList = Array.isArray(authors) ? authors.join(', ') : ''  
  const thumbnail = props.book.hasOwnProperty('imageLinks') ? `url(${props.book.imageLinks.thumbnail})` : ''
  return (
                        <div className="book">
                          <div className="book-top">
                            <div 
  							  className="book-cover" 
  							  style={
  								{ 
  								  width: 128, 
  								  height: 188, 
  								  backgroundImage: thumbnail
  								}
							  }
							>
						    </div>
                            <BookshelfChanger updateBook={props.updateBook} book={props.book} />
                          </div>
                          <div className="book-title">{title}</div>
                          <div className="book-authors">{authorsList}</div>
                        </div>
  )
}

export default BookCard;