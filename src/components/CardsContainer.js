import React, { Component } from 'react';
import UserCard             from './UserCard';
import Api                  from '../api/Api';
import '../scss/CardsContainer.scss';

class CardsContainer extends Component {
  constructor(props) {
    super(props);
    
    this.state = { users: [], fetchingUsers: false, errorFetchingUsers: null };

    this.filterUsers = this.filterUsers.bind(this);
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.setState({ fetchingUsers: true });

    return Api.fetchUsers()
      .then(users => this.setState({ users }))
      .catch(error => this.setState({ errorFetchingUsers: error }))
      .finally(() => this.setState({ fetchingUsers: false }));
  }

  filterUsers(user) {
    const criteria = this.props.searchValue.toLowerCase();
    const field = this.props.selectedFilterOption.toLowerCase();

    if (!field) return true;
 
    return user[field].toLowerCase().includes(criteria);
  }

  renderList() {
    const listItems = this.state.users
      .filter(this.filterUsers)  
      .map(user => {
        return (
          <li className="cardListItem" tabIndex="0" key={user.id}>
            <UserCard user={user} />
          </li>
        )
      });

    const noResults = (!this.state.errorFetchingUsers) ? 'No results.' : this.state.errorFetchingUsers;

    return (
      (listItems.length) ? <ul className="cardList">{listItems}</ul> : noResults
    )
  }

  render() {
    return (
      <section className="CardsContainer">
        { (this.state.fetchingUsers) ? 'Loading users...' : this.renderList() }
      </section>
    );
  }
}

export default CardsContainer;
