import React from 'react'
import './style.css'

 function NavBar() {
  return (
    <div className='NavContainer'>
      <a href='/'>Home</a>
      <a href = '/MySkills'>My Skills</a>
      <a href = '/Projects'>Projects</a>
      <a href = '/Contact'>Contact</a>
    </div>
  );
}
export default NavBar