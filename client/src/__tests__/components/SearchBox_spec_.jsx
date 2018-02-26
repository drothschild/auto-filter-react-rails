import React from 'react';
import { Provider } from 'react-redux';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createMockStore } from 'redux-test-utils';

import SearchBox, { Unwrapped as UnwrappedSearchBox } from '../../components/SearchBox';
import store from '../../redux/store';
import { changeSearchTerm } from '../../redux/actionCreators';

configure({ adapter: new Adapter() });

test('SearchBox renders correctly', () => {
  const component = shallow(<UnwrappedSearchBox searchTerm="" />);
  expect(component).toMatchSnapshot();
});

test('Calling changeSearchTerm changes the input value in the search box', () => {
  const searchWord = 'Doe';
  store.dispatch(changeSearchTerm(searchWord));
  const component = mount(<Provider store={store}>
    <SearchBox />
  </Provider>);
  const input = component.find('input');
  expect(searchWord).toEqual(input.props().value);
});

test('Changing the search box value calls changeSearchTerm', () => {
  const searchWord = 'Doe';
  const testState = {
    searchTerm: '',
  };
  const mockStore = createMockStore(testState);
  const component = mount(<Provider store={mockStore}>
    <SearchBox />
  </Provider>);
  const input = component.find('input');
  const action = {
    type: 'CHANGE_SEARCH_TERM',
    searchTerm: searchWord,
  };
  input.simulate('change', { target: { value: searchWord } });
  expect(mockStore.isActionDispatched(action)).toBe(true);
});
