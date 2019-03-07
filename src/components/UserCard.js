import React, { Component } from 'react';
import '../scss/UserCard.scss';

class UserCard extends Component {
  render() {
    return (
      <div className="UserCard">
        {this.props.user.name}
      </div>
    );
  }
}

export default UserCard;
