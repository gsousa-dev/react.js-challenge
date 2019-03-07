import React, { Component } from 'react';
import SearchBar            from './SearchBar';
import CardsContainer       from './CardsContainer';
import '../scss/App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { searchValue: '', selectedFilterOption: '' };
    
    this.handleSearchValueChange = this.handleSearchValueChange.bind(this);
    this.handleFilterOptionChange = this.handleFilterOptionChange.bind(this);
  }

  handleSearchValueChange(searchValue) {
    this.setState({ searchValue });
  }

  handleFilterOptionChange(selectedOption) {
    this.setState({ selectedFilterOption: selectedOption });
  }

  render() {
    return (
      <main className="App">
        <SearchBar
          searchValue={this.state.searchValue}
          onSearchValueChange={this.handleSearchValueChange}
          onFilterOptionChange={this.handleFilterOptionChange}
        />
        <CardsContainer
          searchValue={this.state.searchValue}
          selectedFilterOption={this.state.selectedFilterOption}
        />
      </main>
    );
  }
}

export default App;
