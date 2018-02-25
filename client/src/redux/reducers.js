import { combineReducers } from 'redux';
import { REQUEST_PEOPLE, RECEIVE_PEOPLE, CHANGE_SEARCH_TERM } from './actions';

const people = (state = { data: [], isFetching: true }, action) => {
  switch (action.type) {
    case REQUEST_PEOPLE:
      return { data: [], isFetching: true };
    case RECEIVE_PEOPLE: {
      console.log('data', action.data);
      return { data: action.data, isFetching: false }; }
    default:
      return state;
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
  people,
  searchTerm,
});

export default rootReducer;
