import React, { Component } from 'react';
import '../scss/SearchBar.scss';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleSearchValueChange = this.handleSearchValueChange.bind(this);
  }

  handleSearchValueChange(ev) {
    this.props.onSearchValueChange(ev.target.value);
  }

  render() {
    return (
      <div className="SearchBar">
        <input
          type="text"
          placeholder="Search.."
          value={this.props.searchValue}
          onChange={this.handleSearchValueChange}
        />
      </div>
    );
  }
}

export default SearchBar;
