import React from 'react'

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

export default ProgressBar
