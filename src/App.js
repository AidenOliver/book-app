import React from 'react';
import BookContextProvider from './Contexts/BookContext';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';

import './App.css';

const App = () => {
  return (
    <BookContextProvider>
        <Navbar />
        <Dashboard />
    </BookContextProvider>
  )
}

export default App;
