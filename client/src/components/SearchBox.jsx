import React from 'react';
import { connect } from 'react-redux';
import { changeSearchTerm } from '../redux/actionCreators';

const SearchBox = ({ searchTerm, handleSearchTermChange }) => (
  <div className="search-box">
    <input type="text" placeholder="Search" value={searchTerm} onChange={handleSearchTermChange} />
  </div>
);

SearchBox.defaultProps = {
  searchTerm: '',
  handleSearchTermChange: () => '',
};

const mapStateToProps = state => ({ searchTerm: state.searchTerm });

const mapDispatchToProps = dispatch => ({
  handleSearchTermChange(event) {
    dispatch(changeSearchTerm(event.target.value));
  },
});

export const Unwrapped = SearchBox;
export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
