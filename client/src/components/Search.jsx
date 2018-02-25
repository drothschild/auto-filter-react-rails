import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBox from './SearchBox';
import { withRouter } from 'react-router';
import SearchResults from './SearchResults';
import { fetchPeople } from '../redux/actionCreators';

class Search extends Component {
  componentDidMount() {
    if (this.props.people.length === 0) {
      this.props.getPeople();
    }
  }
  render() {
    const { match } = this.props;
    console.log(match);
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
};

const mapStateToProps = state => ({
  people: state.people.data,
});

const mapDispatchToProps = dispatch => ({
  getPeople() {
    dispatch(fetchPeople());
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
