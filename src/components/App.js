import React, { Component } from 'react';
import SearchBar            from './SearchBar';
import CardsContainer       from './CardsContainer';
import { library }          from '@fortawesome/fontawesome-svg-core'
import { 
  faGlobeAmericas,
  faHome, faPhone,
  faEnvelope }              from '@fortawesome/free-solid-svg-icons';
import '../scss/App.scss';

library.add(faGlobeAmericas, faPhone, faEnvelope, faHome);

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
        <div className="container">
          <SearchBar
            searchValue={this.state.searchValue}
            onSearchValueChange={this.handleSearchValueChange}
            onFilterOptionChange={this.handleFilterOptionChange}
          />
          <CardsContainer
            searchValue={this.state.searchValue}
            selectedFilterOption={this.state.selectedFilterOption}
          />
        </div>
      </main>
    );
  }
}

export default App;
