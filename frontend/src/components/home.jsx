import React from 'react';
import { useState } from 'react';
import '../styles/home.css';
import next from'../assets/next.png';

const Home = () => {
    const [prompt, setPrompt] = useState("");
    const [photo,setPhoto] = useState("");

    const getAPI = async() => {
      const res = await fetch('http://localhost:5500/request',{
        method: 'POST',
        headers:{
          'content-type': 'application/json',
        },
        body: JSON.stringify({prompt: prompt}),
      })  

      const imageBlob = await res.blob(); 
    const imageUrl = URL.createObjectURL(imageBlob);
    setPhoto(imageUrl);
      
    }  
  return (
    <div>
      <h1 className='heading'>Create beautiful <span className='colored'>AI Art</span> with Vincent.ai</h1>
      <p className='sub-heading'>Discover the Boundless Potential and Impact of AI in Every Sphere of Life.</p>
      <input className="prompt" type="text" name='prompt' value={prompt} onChange={e =>setPrompt(e.target.value)} placeholder='Describe What you want'/>
      <button className='generate' onClick={getAPI}>Generate</button>
      <h2 className='tags-head'>Popular Tags:</h2>
      <div className='tags'>
      <p onClick={e => setPrompt("A Rocket in space")}>A Rocket in space</p>
      <p onClick={e => setPrompt("Elon musk with a gun")}>Elon musk with a gun</p>
      <p onClick={e => setPrompt("A cat in moon with a suit")}>A cat in moon with a suit</p>
      <p onClick={e => setPrompt("Humans living in year 2999")}>Humans living in year 2999</p>
      <div>
        {photo ? <img src={photo} alt="Generated" className='image'/>: null}
      </div>
      </div>
      <img className='next' src={next} alt="Next Page" />
    </div>
  )
}

export default Home
