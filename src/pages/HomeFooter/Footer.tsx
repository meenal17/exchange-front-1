import React from 'react'
import './Style.css'
const Footer = () => {
  return (
    <div className="footer">
      <div className="inner-footer">
        <div className="footer-items">
          <h1>Resources</h1>
          <div className="border1"></div>
          <ul>
            <a href="#">
              <li>Documentation</li>
            </a>
            <a href="#">
              <li>FAQs</li>
            </a>
            <a href="#">
              <li>User policy</li>
            </a>
          </ul>
        </div>

        <div className="footer-items">
          <h1>Product</h1>
          {/* <div className="border1"></div> */}
          <div className='productparent'>
           <div>
           <div>
           swap
            </div>
            <div>
              Bridge
            </div>
            <div>
            Farm
            </div>
           </div>
           <div>
           <div>
              liquidity
            </div>
            <div>
              Staking
            </div>
            <div>
              Markets
            </div>
           </div>
          </div>
          <div className="social-media">
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-google-plus-square"></i>
            </a>
          </div>
        </div>
        <div className="footer-items">
          <h1>Newsletter</h1>
          <p>Join the most vibrant community of DeFi users</p>
          <p>and get early access to new features.</p>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your email"
              aria-label="Enter your email"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button">
                Submit
              </button>
            </div>
          </div>
          {/* <div style={{ display: 'flex',justifyContent:"space-between",alignItems:"center" }}>
            <h1>Community</h1>
            <p>icons</p>
            <p>icons</p>
            <p>icons</p>
            <p>icons</p>
          </div> */}
        </div>
      </div>
      <div style={{ display: 'flex',justifyContent:"space-between",alignItems:"center",margin: "0px 23px" }}>
        <div className="">
          <img src="LeBo.png" alt="" style={{ width: '5rem' }} />
        </div>
        <div className="footer-bottom">2022 Lebo.All rights reserved</div>
      </div>
      
    </div>
  )
}

export default Footer
