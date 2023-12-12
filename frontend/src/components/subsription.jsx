import React from 'react'
import '../styles/subsription.css';

const Subsription = () => {
  return (
    <>
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

            </div>
        </div>
        <div className='sub-cards'>
          <div className='sub-details'>
            <h3 className='sub-plan'>Monthly Plan</h3>
            <p className='sub-price'><span>$10</span>/ Month</p>
            <button className='sub-button'>Subscribe</button>
            </div>
            <div className='sub-specs'>

            </div>
        </div>
        <div className='sub-cards'>
          <div className='sub-details'>
            <h3 className='sub-plan'>Yearly Plan</h3>
            <p className='sub-price'><span>$100</span>/ Year</p>
            <button className='sub-button'>Subscribe</button>
            </div>
            <div className='sub-specs'>

            </div>
        </div>
      </div>
    </>
  )
}

export default Subsription
