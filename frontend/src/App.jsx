import './App.css';
import { useState,useRef } from 'react';

function App() {
  
  const [prompt, setPrompt] = useState("");

  const getAPI = async() => {
    const res = await fetch('http://localhost:5500/request',{
      method: 'POST',
      headers:{
        'content-type': 'application/json',
      },
      body: JSON.stringify({prompt: prompt}),
    })  
    const data = await res.json()
    console.log(data);
  }

  return (
    <>
     <input type="text" name='prompt' onChange={e =>setPrompt(e.target.value)}/>
     <button onClick={getAPI}>Submit</button>
    </>
  );
}

export default App;
