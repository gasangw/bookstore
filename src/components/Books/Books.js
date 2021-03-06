import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../Book/Book';
import AddBook from '../AddBook/AddBook';
import { fetchBooks } from '../../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  const booksData = useSelector((state) => state.books);
  return (
    <div className="d-flex flex-column align-items-center books-container">
      {Object.keys(booksData).map((bookId) => (
        (
          <Book
            key={bookId}
            title={booksData[bookId][0].title}
            author={booksData[bookId][0].author}
            id={bookId}
          />
        )
      ))}
      <AddBook />
    </div>
  );
};

export default Books;
