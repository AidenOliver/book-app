import React, {createContext, useState} from 'react';

export const BookContext = createContext();

const BookContextProvider = ({children}) => {
    const [books, setBooks] = useState([]);

    const addBook = book => {
        setBooks([...books, {...book}]);
    };

    return (
        <BookContext.Provider value={{books, addBook}}>
            {children}
        </BookContext.Provider>
    );
};

export default BookContextProvider; 