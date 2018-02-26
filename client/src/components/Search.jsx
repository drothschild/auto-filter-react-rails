import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBox from './SearchBox';
import { withRouter } from 'react-router';
import SearchResults from './SearchResults';
import { fetchPeople, changeSearchTerm } from '../redux/actionCreators';

class Search extends Component {
  componentDidMount() {
    const {
 match, changeTerm, people, getPeople 
} = this.props;
    if (match.params.term) {
      changeTerm(match.params.term);
    }
    if (people.length === 0) {
      getPeople();
    }
  }
  render() {
    const { match } = this.props;
    return (
      <div>
        <SearchBox searchTerm={match.params.term} />
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
