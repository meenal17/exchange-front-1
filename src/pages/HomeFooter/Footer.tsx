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
              <div>swap</div>
              <div>Bridge</div>
              <div>Farm</div>
            </div>
            <div>
              <div>liquidity</div>
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
                <img src="icon1.png" alt="" className='iconfont' />
              </div>
              <div>
                <img src="icon2.png" alt="" className='iconfont' />
              </div>
              <div>
                <img src="icon3.png" alt="" className='iconfont' />
              </div>
              <div>
                <img src="icon4.png" alt="" className='iconfont' />
              </div>
              <div>
                <img src="icon5.png" alt="" className='iconfont' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '8px 23px' }}>
        <div className="">
          <img src="LeBo.png" alt="" style={{ width: '5rem' }} />
        </div>
        <div className="footer-bottom">2022 Lebo.All rights reserved</div>
      </div>
    </div>
  )
}

export default Footer
