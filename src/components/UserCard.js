import React               from 'react';
import UserContactInfo     from './UserContactInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../scss/UserCard.scss';


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
      <div className="generalInfo">
        <h2>{name}</h2>
        <p className="username">{username}</p>
        <p>Works @ {company.name}</p>
        <p><FontAwesomeIcon icon="home" /> {address.city} </p>
      </div>

      <UserContactInfo contactInfo={{address, email, phone, website}} />
    </section>
  );
}

export default UserCard;
