import React from "react";
import "./Education.css";
import JobDescription from "../JobDescription";


const education = [
  {
    isJob: false,
    website: "W3Schools.com",
    from: '',
    to: '',
    current: true,
    description: `Web Development! All I need to know in one place`
  },
  {
    isJob: false,
    website: "London Business School",
    from: '2013',
    to: '2015',
    current: false,
    description: ` Master Degree`
  },
  {
    isJob: false,
    website: "School of Coding",
    from: '2010',
    to: '2013',
    current: false,
    description: `Bachelor Degree`
  }
]

const Educations = () => {
  return (
    <div className="education-container">
      <h2 className="">
        <i className="fa fa-certificate fa-fw margin-right text-teal"></i>
        Education
      </h2>
      {
        education.map((data, i) => <JobDescription data={data} isLast={i === education.length-1 ? true : false}/>)
      }
      <div className="container">
        <h5 className="opacity">
          <b>W3Schools.com</b>
        </h5>
        <h6 className="text-teal">
          <i className="fa fa-calendar fa-fw margin-right"></i>
          Forever
        </h6>
        <p>Web Development! All I need to know in one place</p>
        <hr />
      </div>
      <div className="container">
        <h5 className="opacity">
          <b>London Business School</b>
        </h5>
        <h6 className="text-teal">
          <i className="fa fa-calendar fa-fw margin-right"></i>2013 - 2015
        </h6>
        <p>Master Degree</p>
        <hr />
      </div>
      <div className="container">
        <h5 className="opacity">
          <b>School of Coding</b>
        </h5>
        <h6 className="text-teal">
          <i className="fa fa-calendar fa-fw margin-right"></i>2010 - 2013
        </h6>
        <p>Bachelor Degree</p>
        <br />
      </div>
    </div>
  );
};

const Education = ({
  isLast,
  data
}) => {
  return (
    <div className="container">
    <h5 className="opacity">
      <b>London Business School</b>
    </h5>
    <h6 className="text-teal">
      <i className="fa fa-calendar fa-fw margin-right"></i>2013 - 2015
    </h6>
    <p>Master Degree</p>
    <hr />
    </div>   
    
  )
}

export default Educations;
