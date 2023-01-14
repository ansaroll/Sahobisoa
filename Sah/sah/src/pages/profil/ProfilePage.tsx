import React from 'react';
import './ProfilePage.css';

const ProfilePage = (props:Props) => {
  return (
    <div className="profile-page">
      <div className="profile-picture">
        <img src={props.image} alt="Profile"  style={{
            border:props.isActive ? "4px solid green" : "4px solid primary.main"
        }} />
      </div>
      <div className="profile-info">
        <div className="profile-description">
          <p>{props.description}</p>
        </div>
        <div className="profile-location">
          <h3>Adresses:</h3>
          <p>{props.address1}</p>
          <p>{props.address2}</p>
        </div>
        <div className="profile-skills">
          <h3>Compétences en développement web:</h3>
          <ol>
            {props.skills?.map((skill) => (
              <li>{skill}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;

type Props = {
    image?: string;
    description?: string;
    address1?:string;
    address2?:string;
    skills?: string[];
    name?: string;
    isActive?: boolean;
}