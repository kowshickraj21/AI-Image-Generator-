import React from 'react';
import { useState, useRef } from 'react';
import '../styles/home.css';
import next from'../assets/next.png';
import Generator from './generator';
import { useScroll,useTransform, motion } from 'framer-motion';

const Home = () => {
    const [prompt, setPrompt] = useState("");
    const [warning, setWarning] = useState(false);
    const [photo,setPhoto] = useState("");
    const [generate, setGenerate] = useState(false);
    const [loading, setLoading] = useState(false);
    const target = useRef();

    const {scrollY} = useScroll({
      target: target,
      offset: ["end center" , "center end"],
    });


    const opacity = useTransform(scrollY,[0 , 200],[1 , 0]);

    const getAPI = async() => {
      setLoading(true);
      const res = await fetch('http://localhost:5500/request',{
        method: 'POST',
        headers:{
          'content-type': 'application/json',
        },
        body: JSON.stringify({prompt: prompt}),
      })  

      const imageBlob = await res.blob(); 
    const imageUrl = URL.createObjectURL(imageBlob);
    setLoading(false);
    setPhoto(imageUrl);
    }  

  function handleSubmit() {
    if(prompt ===""){
      setWarning(true);
    }else{
      setWarning(false);
    setGenerate(true);
    getAPI();
    }
  }

  return (
    <>
    <div>
      <motion.div style={{opacity:opacity}}>
      <h1 className='heading'>Create beautiful <span className='colored'>AI Art</span> with Vincent.ai</h1>
      <p className='sub-heading'>Discover the Boundless Potential and Impact of AI in Every Sphere of Life.</p>
      </motion.div>
      <motion.div className='search'>
      <motion.input className="prompt" type="text" name='prompt' value={prompt} onChange={e =>setPrompt(e.target.value)} placeholder='Describe What you want'/>
      <button className='generate' onClick={handleSubmit}>Generate</button>
      <p className={`${warning?'warning':'hide'}`}>"Please enter a prompt to generate image."</p>
      </motion.div>
      <motion.h2 className='tags-head' style={{opacity:opacity}}>Popular Tags:</motion.h2>
      <motion.div className='tags' ref={target} style={{opacity:opacity}} >
      <p onClick={e => setPrompt("A Rocket in space")}>A Rocket in space</p>
      <p onClick={e => setPrompt("Elon musk with a gun")}>Elon musk with a gun</p>
      <p onClick={e => setPrompt("A cat in moon with a suit")}>A cat in moon with a suit</p>
      <p onClick={e => setPrompt("Humans living in year 2999")}>Humans living in year 2999</p>
      </motion.div>
      <motion.div className='next-box' style={{opacity:opacity}}>
      <img className='next' src={next} alt="Next Page"/>
      </motion.div>
    </div>
     {generate ? <Generator photo = {photo} loading = {loading}/>:null}
    </>
  )
}

export default Home
