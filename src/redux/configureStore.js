import { configureStore, combineReducers } from '@reduxjs/toolkit';
import checkingStatus, { statusAction } from './categories/categories';
import bookCounterReducer, { addBook, removingBook } from './books/books';

export const reducer = combineReducers({
  status: checkingStatus,
  count: bookCounterReducer,
});

const store = configureStore({ reducer });

export default store;
statusAction();
addBook();
removingBook();
