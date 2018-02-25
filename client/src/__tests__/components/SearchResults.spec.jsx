import React from 'react';
import { configure, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Unwrapped as UnwrappedSearchResults } from '../../components/SearchResults';
import People from '../dummydata.json';

configure({ adapter: new Adapter() });

test('It should render search results', () => {
  const component = render(<UnwrappedSearchResults people={People} />);
  expect(component.find('.person-line-item')).toHaveLength(People.length);
});

test('It should filter first name with the search term', () => {
  const component = render(<UnwrappedSearchResults people={People} searchTerm="Jane" />);
  expect(component.find('.person-line-item')).toHaveLength(1);
});

test('It should filter last name with the search term', () => {
  const component = render(<UnwrappedSearchResults people={People} searchTerm="Doe" />);
  expect(component.find('.person-line-item')).toHaveLength(1);
});
test('It should filter out all records if no matching search term', () => {
  const component = render(<UnwrappedSearchResults people={People} searchTerm="zzz" />);
  expect(component.find('.person-line-item')).toHaveLength(0);
});

test('It should show waiting status', () => {
  const component = shallow(<UnwrappedSearchResults isFetching />);
  expect(component.find('.is-fetching')).toHaveLength(1);
});

test('It should hide waiting status', () => {
  const component = shallow(<UnwrappedSearchResults isFetching="false" />);
  expect(component.find('.is-fetching')).toHaveLength(1);
});

test('By default, it should show no people and a waiting status', () => {
  const component = shallow(<UnwrappedSearchResults />);
  expect(component.find('.person-line-item')).toHaveLength(0);
  expect(component.find('.is-fetching')).toHaveLength(1);
});
