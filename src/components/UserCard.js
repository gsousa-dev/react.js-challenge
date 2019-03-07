import React from 'react';
import '../scss/UserCard.scss';
import UserContactInfo from './UserContactInfo';

function UserCard (props) {
  const {
    address,
    company,
    email,
    name,
    username,
    phone,
    website
  } = props.user;

  return (
    <section className="UserCard">
      <h2>{name}</h2>
      <p>{username}</p>

      @ {company.name}

      <p>{address.city}</p>

      <UserContactInfo contactInfo={{address, email, phone, website}} />
    </section>
  );
}

export default UserCard;
