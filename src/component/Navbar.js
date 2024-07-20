import React from 'react'
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <img src="/images/logo.png" alt="" width={200} />
      <ul>
        <li><a href=''>Home</a></li>
        <li><a href=''>About</a></li>
        <li><a href=''>Contact</a></li>
        <li><a href=''>Blog</a></li>
        <li className='active'><a href=''>Join us</a></li>
      </ul>
    </nav>
  )
}

export default Navbar