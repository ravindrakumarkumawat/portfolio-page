import React from 'react'
import { AmazonOutlined, FacebookOutlined, GoogleOutlined, InstagramOutlined, LinkedinOutlined, TwitterOutlined } from '@ant-design/icons';
import RowLayout from '../Layout/RowLayout'
import './Footer.css'

const Footer = () => {
  return (
    <div className="bg-green">
      <RowLayout>
        <div className="footer mtb-5">
          <div>
            <p>Find me on social media.</p>
          </div>
          <div className="icons-list">
            <FacebookOutlined />
            <InstagramOutlined />
            <GoogleOutlined />  
            <TwitterOutlined />
            <AmazonOutlined />
            <LinkedinOutlined />
          </div>
          <div>
            <p>Powered by <a href="#" target="_blank">w3.css</a></p>
          </div>
        </div>
      </RowLayout>
    </div>
  )
}

export default Footer
