import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
// mport { reducers }from './redux/configureStore';
import Form from './form';

function Books({ books }) {
  Books.propTypes = {
    books: PropTypes.node.isRequired,
  };
  const book = useSelector((state) => state);
  console.log(book);
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
