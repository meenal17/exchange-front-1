import React from 'react'
import './Style.css'
// import Particle from "../particle/Particle"
const Footer = () => {
  return (
    <div className="footer">
         {/* <Particle/> */}
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
          <div className="productparent">
            <div>
              <div>Swap</div>
              <div>Bridge</div>
              <div>Farm</div>
            </div>
            <div>
              <div>Liquidity</div>
              <div>Staking</div>
              <div className='Markets'>Markets</div>
            </div>
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
          <div className='community'>
            <h1>Community</h1>
            <div className="icons">
              <div>
                <img src="images/icon1.png" alt="" className='iconfont' />
              </div>
              <div>
                <img src="images/icon2.png" alt="" className='iconfont' />
              </div>
              <div>
                <img src="images/icon3.png" alt="" className='iconfont' />
              </div>
              <div>
                <img src="images/icon4.png" alt="" className='iconfont' />
              </div>
              <div>
                <img src="images/icon5.png" alt="" className='iconfont' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0px 20px' }}>
        <div className="">
          <img src="images/Lebo_logo.svg" alt="" style={{ width: '10rem' }} />
        </div>
        <div className="footer-bottom">2022 Lebo.All rights reserved</div>
      </div>
    </div>
  )
}

export default Footer
