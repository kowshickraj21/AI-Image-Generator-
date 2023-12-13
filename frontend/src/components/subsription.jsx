import React from 'react'
import '../styles/subsription.css';
import { TiTick } from "react-icons/ti";

const Subsription = () => {
  return (
    <div id='subsription'>
      <h2 className='sub-title'>Purchase a <span className='colored'>Subsription</span></h2>
      <p className='sub-text'>Choose a plan that works for you</p>
      <div className='sub-container'>
        <div className='sub-cards'>
          <div className='sub-details'>
            <h3 className='sub-plan'>Free Plan</h3>
            <p className='sub-price'><span>$0</span>/ Year</p>
            <button className='sub-button'>Subscribe</button>
            </div>
            <div className='sub-specs'>
            <ul>
                <li><TiTick className='tick' /> 100 Renders</li>
                <li><TiTick className='tick' /> 1080P Quality</li>
                <li><TiTick className='tick' /> Download pictures</li>
              </ul>
            </div>
        </div>
        <div className='sub-cards'>
          <div className='sub-details'>
            <h3 className='sub-plan'>Monthly Plan</h3>
            <p className='sub-price'><span>$10</span>/ Month</p>
            <button className='sub-button'>Subscribe</button>
            </div>
            <div className='sub-specs'>
            <ul>
                <li><TiTick className='tick' /> 100 Renders</li>
                <li><TiTick className='tick' /> 4K Quality</li>
                <li><TiTick className='tick' /> Download pictures</li>
              </ul>
            </div>
        </div>
        <div className='sub-cards'>
          <div className='sub-details'>
            <h3 className='sub-plan'>Yearly Plan</h3>
            <p className='sub-price'><span>$100</span>/ Year</p>
            <button className='sub-button'>Subscribe</button>
            </div>
            <div className='sub-specs'>
            <ul>
                <li><TiTick className='tick' /> Unlimited Renders</li>
                <li><TiTick className='tick' /> 4K Quality</li>
                <li><TiTick className='tick' /> Download pictures</li>
              </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Subsription
