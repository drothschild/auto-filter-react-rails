import reducers from '../../redux/reducers';
import { CHANGE_SEARCH_TERM, REQUEST_PEOPLE, RECEIVE_PEOPLE } from '../../redux/actions';
import people from '../dummyData.json';

const baseState = { people: { data: [], isFetching: true }, searchTerm: '' };
test('@@init', () => {
  const state = reducers(undefined, {});
  expect(state).toEqual(baseState);
});

test('Search Term', () => {
  const state = reducers(baseState, { type: CHANGE_SEARCH_TERM, searchTerm: 'banana' });
  expect(state.searchTerm).toEqual('banana');
});

test('Request People', () => {
  const state = reducers(baseState, { type: REQUEST_PEOPLE });
  expect(state).toEqual(baseState);
});

test('Receive People', () => {
  const state = reducers(baseState, { type: RECEIVE_PEOPLE, data: people });
  expect(state.people.data).toEqual(people);
  expect(state.people.isFetching).toEqual(false);
});
