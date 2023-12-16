import React from 'react';
import '../styles/generator.css';
import { MdOutlineFileDownload } from "react-icons/md";

const Generator = (props) => {

  const download = async () => {
      try {
        const response = await fetch('http://localhost:5500/download');
        
        if (response.ok) {
          const blob = await response.blob();
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'output.png';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
        } else {
          console.error('Failed to download the file');
        }
      } catch (error) {
        console.error('Error downloading the file:', error);
      }
    };


  return (
    <>
    <div className='image-container'>
      {(props.photo && !props.loading) ? <img src={props.photo} alt="Generated" className='image'/>:<div className='Loader' />}
      </div>
      <button className='download' disabled ={props.loading} onClick={download}>Download <MdOutlineFileDownload className='download-icon'/></button>
    </>
  )
}

export default Generator
