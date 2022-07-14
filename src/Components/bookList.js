/* eslint-disable react/prop-types */
import React from 'react';
import Form from './form';

function Books({ books }) {
  return (
    <div className="book-list">
      {books.map((book) => (
        <div className="perBook" key={book.id}>
          <h3>{book.title}</h3>
          <p>
            Written by
            {book.author}
          </p>
          <button type="submit">Remove Book</button>
        </div>
      ))}
      ;
      <Form />
    </div>
  );
}

export default Books;
