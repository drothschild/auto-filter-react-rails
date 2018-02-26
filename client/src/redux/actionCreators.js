import axios from 'axios';
import { CHANGE_SEARCH_TERM, RECEIVE_PEOPLE, REQUEST_PEOPLE } from './actions';

export const changeSearchTerm = term => ({
  type: CHANGE_SEARCH_TERM,
  searchTerm: term,
});

export const receivePeople = data => ({
  type: RECEIVE_PEOPLE,
  data,
});

const requestPeople = () => ({
  type: REQUEST_PEOPLE,
});

export const fetchPeople = () => (dispatch) => {
  dispatch(requestPeople);
  return axios
    .get('/api/v1/people')
    .then((res) => {
      dispatch(receivePeople(res.data));
    })
    .catch((error) => {
      console.error('axios error', error); // eslint-disable-line no-console
    });
};
