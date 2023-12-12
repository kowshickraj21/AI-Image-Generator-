import React from 'react';
import { RiDoubleQuotesL } from "react-icons/ri";
import '../styles/review.css'

const Review = () => {
  return (
    <>
      <div className='review'>
      <RiDoubleQuotesL className='quotes'/>
      <p className='review-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quas repellendus, error soluta placeat veniam provident! Animi est sint dignissimos!</p>
      </div>
    </>
  )
}

export default Review;
