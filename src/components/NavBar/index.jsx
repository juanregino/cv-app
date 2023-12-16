import React from 'react'
import './style.css'

 function NavBar() {
  return (
    <div className='NavContainer'>
      <a href='/'>Home</a>
      <a href = '/my-skills'>My Skills</a>
      <a href = '/projects'>Projects</a>
      <a href = '/contact'>Contact</a>
    </div>
  );
}
export default NavBar