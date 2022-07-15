import React from 'react';
import PropTypes from 'prop-types';
import Form from './form';

function Books({ books }) {
  Books.propTypes = {
    books: PropTypes.node.isRequired,
  };
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
