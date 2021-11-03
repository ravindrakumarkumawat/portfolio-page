import React from 'react'
import JobDescription from '../JobDescription'
import './WorkExperience.css'
const experience = [
  { 
    isJob: true,
    jobProfile: 'Front End Developer',
    website: "w3schools.com",
    from: 'Jan 2015',
    to: '',
    current: true,
    description: `Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in
    deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta
    ea et odio, unde doloremque repellendus iure, iste.`
  },
  {
    isJob: true,
    jobProfile: 'Web Developer',
    website: "something.com",
    from: 'Mar 2012',
    to: 'Dec 2014',
    current: false,
    description: ` Consectetur adipisicing elit. Praesentium magnam consectetur
    vel in deserunt aspernatur est reprehenderit sunt hic. Nulla
    tempora soluta ea et odio, unde doloremque repellendus iure,
    iste.`
  },
  {
    isJob: true,
    jobProfile: 'Graphic Designer',
    website: "designsomething.com",
    from: 'Jun 2010',
    to: 'Mar 2012',
    current: false,
    description: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit.`
  }
]
const WorkExperience = () => {
  return (
    <div className="work-container">
      <h2 className="">
        <i className="fa fa-suitcase fa-fw margin-right text-teal"></i>
        Work Experience
      </h2>
      {
        experience.map((data, i) => <JobDescription data={data} isLast={i === experience.length-1 ? true : false}/>)
      }
    </div>
  )
}

export default WorkExperience
