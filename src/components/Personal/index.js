import React from "react";
import "./Personal.css";
import NormalRow from "../common/NormalRow";
import NormalCol from "../common/NormalCol";
import NormalImg from "../common/NormalImg";
import AvatarImg from "../../assets/images/avatar_hat.jpg";

const Personal = () => {
  return (
    <NormalRow>
      <NormalCol span={24}>
        <Avatar />
        <PersonalDetails />
        <Skills />
        <Languages />
      </NormalCol>
    </NormalRow>
  );
};

const Avatar = () => {
  return (
    <div className="pavatar-container">
      <NormalImg src={AvatarImg} alt={"Avatar"} />
      <div className="overlay-text">
        <h2>Jane Doe</h2>
      </div>
    </div>
  );
};

const PersonalDetails = () => {
  return (
    <div className="personal-details p-2">
      <p>
        <i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>
        Designer
      </p>
      <p>
        <i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>
        London, UK
      </p>
      <p>
        <i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>
        ex@mail.com
      </p>
      <p>
        <i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>
        1224435534
      </p>
      <hr />
    </div>
  );
};

const Skills = () => {

  return (
    <div className="skills-container p-2">
      <p className="">
        <b>
          <i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>
          Skills
        </b>
      </p>
      <p>Adobe Photoshop</p>
      <ProgressBar percentage={90}/>
      <p>Photography</p>
      <ProgressBar percentage={80}/>
        <p>Illustrator</p>
        <ProgressBar percentage={75}/>
        <p>Media</p>
        <ProgressBar percentage={50}/>
        <br />
    </div>
  )
}

const ProgressBar = ({
  type="small",
  percentage
}) => {
  return (
    <div className="bg-grey round w3-small">
      <div
        className="round bg-green justify-center"
        style={{ height: `${type === 'big'? '1.5rem' : '1.25rem' }`, width: `${percentage}%` }}
      >
        {
          type === 'big' ? '' :  `${percentage}%`
        }
      </div>
    </div>
  )
}

const Languages = () => {
  return (  
    <div className="skills-container p-2">
    <p className="large text-theme">
      <b>
        <i className="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>
        Languages
      </b>
    </p>
    <p>English</p>    
    <ProgressBar percentage={100} type={"big"} />    
    <p>Spanish</p>    
    <ProgressBar percentage={55} type={"big"} />    
    <p>German</p>      
    <ProgressBar percentage={25} type={"big"} />
  </div>  
  )
}

export default Personal;
