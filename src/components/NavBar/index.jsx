import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';

 function NavBar() {
  return (
    <div className='NavContainer'>
      <Link to='/'>Home</Link>
      <Link to = '/my-skills'>My Skills</Link>
      <Link to = '/projects'>Projects</Link>
      <Link to = '/contact'>Contact</Link>
    </div>
  );
}
export default NavBar