import React from 'react';
import Book from './Books/Book';
import './App.css';

const App= () => {
  return (
    <section className='bookstore'>
      <div className='bookstore-title'>
       <h1>My Book Store</h1>
       <Book />
       <Book />
       <Book />
       <Book />
       <Book />
       <Book />
       <Book />
       </div>
    </section>
  );
}

export default App;
