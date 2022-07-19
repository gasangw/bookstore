const ADD_BOOK = 'books/ADD';
const REMOVE_BOOK = 'books/REMOVE';

const bookCounterReducer = (books = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...books, action.book];

    case REMOVE_BOOK:
      return books.filter((book) => action.book !== book);
    default:
      return books;
  }
};

const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

const removingBook = (book) => ({
  type: 'REMOVE_BOOK',
  book,
});

export { addBook, removingBook };
export default bookCounterReducer;
