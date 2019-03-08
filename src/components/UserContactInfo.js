import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../scss/UserContactInfo.scss';


function UserContactInfo(props) {
  const contactInfo = props.contactInfo;

  return (
    <section className="UserContactInfo">
      <ul className="iconList">
        <li className="iconListItem">
          <a href={`tel:${contactInfo.phone}`} title={contactInfo.phone}>
            <FontAwesomeIcon icon="phone" />
          </a>
        </li>
        <li className="iconListItem">
          <a href={`mailto:${contactInfo.email}`} title={contactInfo.email}>
            <FontAwesomeIcon icon="envelope" />
          </a>
        </li>
        <li className="iconListItem">
          <a href={`//${contactInfo.website}`} target="_blank" rel="noopener noreferrer" title={contactInfo.website}>
            <FontAwesomeIcon icon="globe-americas" />
          </a>
        </li>
      </ul>
    </section>
  )
}

export default UserContactInfo;