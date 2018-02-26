import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import queryString from 'query-string';
import SearchBox from './SearchBox';
import SearchResults from './SearchResults';
import { fetchPeople, changeSearchTerm } from '../redux/actionCreators';

class Search extends Component {
  componentDidMount() {
    const {
      location, changeTerm, people, getPeople,
    } = this.props;
    if (location.search) {
      const parsed = queryString.parse(location.search);
      if (parsed.name) {
        changeTerm(parsed.name);
      }
    }
    if (people.length === 0) {
      getPeople();
    }
  }
  render() {
    return (
      <div>
        <SearchBox />
        <SearchResults />
      </div>
    );
  }
}

Search.defaultProps = {
  people: [],
  getPeople: () => '',
  changeTerm: () => '',
};

const mapStateToProps = state => ({
  people: state.people.data,
});

const mapDispatchToProps = dispatch => ({
  getPeople() {
    dispatch(fetchPeople());
  },
  changeTerm(term) {
    dispatch(changeSearchTerm(term));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
