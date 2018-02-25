import React from 'react';
import { Provider } from 'react-redux';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SearchResults, { Unwrapped as UnwrappedSearchResults } from '../../components/SearchResults';
import store from '../../redux/store';
import { changeSearchTerm } from '../../redux/actionCreators';

configure({ adapter: new Adapter() });
