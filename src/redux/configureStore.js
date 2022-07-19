import { createStore } from 'react-redux';
import checkingStatus, { statusAction } from './categories/categories';
import bookCounterReducer, { addBook, removingBook } from './books/books';

const store = createStore({
  status: checkingStatus,
  count: bookCounterReducer,
});

export default store;
statusAction();
addBook();
removingBook();
