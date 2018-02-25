import { combineReducers } from 'redux';
import { REQUEST_PEOPLE, RECEIVE_PEOPLE, RECEIVE_ERRORS, CHANGE_SEARCH_TERM } from './actions';

const people = (state = { data: [], isFetching: true }, action) => {
  switch (action.type) {
    case REQUEST_PEOPLE:
      return { data: [], isFetching: true };
    case RECEIVE_PEOPLE:
      return { data: action.data, isFetching: false };
    default:
      return state;
  }
};

const errors = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    default:
      return [];
  }
};

const searchTerm = (state = '', action) => {
  switch (action.type) {
    case CHANGE_SEARCH_TERM:
      return action.searchTerm;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  errors,
  people,
  searchTerm,
});

export default rootReducer;
