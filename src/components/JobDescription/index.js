import React from 'react'

const JobDescription = ({
  isLast,
  data
}) => {
  return (
  <div className="container">
    <h5 className="opacity">
      <b>{data.isJob ? `${data.jobProfile} / ${data.website}` : data.website}</b>
    </h5>
    <h6 className="text-teal">
      <i className="fa fa-calendar fa-fw margin-right"></i>
      {data.from} {data.isJob ? '-' : ""} {data.current ? <span className="tag teal round">{data.isJob ? `Current` : 'Forever'}</span> : data.to}
    </h6>
    <p>
      {data.description}
    </p>
    {!isLast && <hr />}
  </div>
  )
}

export default JobDescription
