import React from 'react'
import './Speak.css'
import ProgressBar from '../common/ProgressBar'

const SpeakLanguage = () => {
  return (  
    <div className="skills-container p-2">
    <p className="large text-theme">
      <b>
        <i className="fa fa-globe fa-fw margin-right text-teal"></i>
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

export default SpeakLanguage
