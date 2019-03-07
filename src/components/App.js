import React, { Component } from 'react';
import SearchBar            from './SearchBar';
import CardsContainer       from './CardsContainer';
import '../scss/App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { searchValue: '' };
    this.handleSearchValueChange = this.handleSearchValueChange.bind(this);
  }

  handleSearchValueChange(searchValue) {
    this.setState({ searchValue });
  }

  render() {
    return (
      <div className="App">
        <SearchBar
          searchValue={this.state.searchValue}
          onSearchValueChange={this.handleSearchValueChange}
        />
        <CardsContainer searchValue={this.state.searchValue}/>
      </div>
    );
  }
}

export default App;
