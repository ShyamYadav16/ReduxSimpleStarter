import { combineReducers } from 'redux';
import BookList from './books';
import activeBook from './active_book';

const rootReducer = combineReducers({
  books: BookList,
  activeBook: activeBook
});

export default rootReducer;
