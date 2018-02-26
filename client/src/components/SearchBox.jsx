import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeSearchTerm } from '../redux/actionCreators';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }
  handleSearchTermChange(event) {
    const term = event.target.value;
    const loc = (term === '') ? '' : `?name=${encodeURIComponent(term)}`;
    window.history.pushState('', '', `${window.location.origin}/search${loc}`);
    this.props.dispatchSearchTermChange(term);
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
export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
