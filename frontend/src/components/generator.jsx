import React from 'react';
import '../styles/generator.css';
import { MdOutlineFileDownload } from "react-icons/md";

const Generator = (props) => {
  return (
    <>
    <div className='image-container'>
      {props.photo ? <img src={props.photo} alt="Generated" className='image'/>:<div className='Loader' />}
      </div>
      <button className='download'>Download <MdOutlineFileDownload className='download-icon'/></button>
    </>
  )
}

export default Generator
