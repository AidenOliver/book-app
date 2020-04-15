import React, {useContext} from 'react';
import {BookContext} from '../Contexts/BookContext';

const BookList = () => {
    const {books, deleteBook} = useContext(BookContext);

    return (
        <div className="section section-books">
            <div className="container">
                <h6>Books</h6>
                <ul>
                    {books.map(book => (
                        <li key={book}>
                            <div className="card book">
                                <div className="book-details">
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-author">{book.author}</div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default BookList;