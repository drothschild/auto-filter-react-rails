import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeSearchTerm } from '../redux/actionCreators';
import { withRouter, Redirect } from 'react-router';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }
  handleSearchTermChange(event) {
    window.history.pushState('', '', `${window.location.origin}/search/${event.target.value}`);
    this.props.dispatchSearchTermChange(event.target.value);
  }
  render() {
    const { searchTerm } = this.props;
    return (
      <div className="search-box">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={this.handleSearchTermChange}
        />
      </div>
    );
  }
}

SearchBox.defaultProps = {
  searchTerm: '',
  dispatchSearchTermChange: () => '',
};

const mapStateToProps = state => ({ searchTerm: state.searchTerm });

const mapDispatchToProps = dispatch => ({
  dispatchSearchTermChange(term) {
    dispatch(changeSearchTerm(term));
  },
});

export const Unwrapped = SearchBox;
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBox));
