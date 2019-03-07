import React, { Component } from 'react';
import '../scss/SearchBar.scss';

class SearchBar extends Component {

  filterOptions = ['Email', 'Name', 'Username'];

  constructor(props) {
    super(props);

    this.state = { isInvalidOption: true };

    this.handleSearchValueChange = this.handleSearchValueChange.bind(this);
    this.handleFilterOptionChange = this.handleFilterOptionChange.bind(this);
  }

  handleSearchValueChange(ev) {
    this.props.onSearchValueChange(ev.target.value);
  }

  handleFilterOptionChange(ev) {
    this.setState({ isInvalidOption: !ev.target.value });
    this.props.onFilterOptionChange(ev.target.value);
  }

  render() {
    return (
      <div className="SearchBar">
        <select onChange={this.handleFilterOptionChange}>
          <option value="">Search users by:</option>
          {this.filterOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
          ))}
        </select>

        <input
          type="search"
          placeholder="Search.."
          value={this.props.searchValue}
          onChange={this.handleSearchValueChange}
          disabled={this.state.isInvalidOption}
        />
      </div>
    );
  }
}

export default SearchBar;
