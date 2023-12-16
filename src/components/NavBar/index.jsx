import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';

 function NavBar() {
  return (
    <div className='NavContainer'>
      <Link className='nav-ancla' to='/'>Home</Link>
      <Link className='nav-ancla' to = '/my-skills'>My Skills</Link> 
      <Link className='nav-ancla' to = '/projects'>Projects</Link> 
      <Link className='nav-ancla' to = '/contact'>Contact</Link>
      <div></div>
    </div>
  );
}
export default NavBar