import React from 'react';
import '../scss/UserContactInfo.scss';

function UserContactInfo(props) {
  const contactInfo = props.contactInfo;

  return (
    <section>
      <h4>Hit me up!</h4>

      <span tabIndex="0">{contactInfo.phone}</span> <br></br>

      <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a><br></br>

      <a href={contactInfo.website}>website</a>
    </section>
  )
}

export default UserContactInfo;