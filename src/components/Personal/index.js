import React from 'react'
import './Personal.css'
import NormalRow from '../common/NormalRow'
import NormalCol from '../common/NormalCol'
import NormalImg from '../common/NormalImg'
import Avatar from '../../assets/images/avatar_hat.jpg'

const Personal = () => {
  return (
    <NormalRow>
      <NormalCol span={24}>
        <div className="container">        
        <NormalImg src={Avatar} alt={"Avatar"} />
        <div className="overlay-text">
          <h2>Jane Doe</h2>
        </div>          
        </div>  
      </NormalCol>
    </NormalRow>
  )
}

export default Personal
