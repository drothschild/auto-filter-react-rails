import React from 'react';
import { connect } from 'react-redux';
import PersonLineItem from './PersonLineItem';

const SearchResults = ({ searchTerm, people, isFetching }) => {
  const possibleWaitingAnnouncement = isFetching ? (
    <div className="is-fetching">Fetching Data...</div>
  ) : null;
  const peopleList = people
    .filter(person =>
      `${person.attributes.firstName} ${person.attributes.lastName}`
        .toUpperCase()
        .indexOf(searchTerm.toUpperCase()) >= 0)
    .sort((a, b) => {
      if (a.attributes.lastName < b.attributes.lastName) {
        return -1;
      }
      return 1;
    })
    .map(person => <PersonLineItem person={person} key={person.id} />);
  return (
    <div className="search-results">
      {possibleWaitingAnnouncement}
      {peopleList}
    </div>
  );
};

SearchResults.defaultProps = {
  people: [],
  searchTerm: '',
  isFetching: true,
};

const mapStateToProps = state => ({
  people: state.people.data,
  searchTerm: state.searchTerm,
  isFetching: state.people.isFetching,
});


export const Unwrapped = SearchResults;

export default connect(mapStateToProps)(SearchResults);
