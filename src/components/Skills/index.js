import React from 'react'
import ProgressBar from '../common/ProgressBar'
import './Skill.css'

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

export default Skills
