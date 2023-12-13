import React from 'react'
import '../styles/navbar.css'

const Navbar = (props) => {


  return (
    <section className='navbar' onClick={props.scroll}>
    <div className='nav-items'>
    <p className='logo colored'>Vincent.AI</p>
      <ul className='nav-list'>
        <li>About</li>
        <li><a href="https://platform.stability.ai/docs/getting-started" target='_blank'>Documents</a></li>
        <li><a href="#subscription">Pricing</a></li>
        <li><button className='sign-up'>Sign up</button></li>
      </ul>
    </div>
    </section>
  )
}

export default Navbar
