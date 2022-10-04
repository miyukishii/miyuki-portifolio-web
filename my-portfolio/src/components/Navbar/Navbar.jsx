import React from 'react';
import './Navbar.css';
import { AiOutlineHome, AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { FaLaptopCode } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className='nav-container'>
        <ul className='nav-list'>
          <li className='nav-item'><a href='./' title='Home' className='nav-link'><AiOutlineHome /></a></li>
          <li className='nav-item'><a href='./' title='Projects' className='nav-link'><FaLaptopCode /></a></li>
          <li className='nav-item'><a href='./ 'title='Contact' className='nav-link'><AiOutlineMail /></a></li>
          <li className='nav-item'><a href='./' title='About me' className='nav-link'><AiOutlineUser /></a></li>
        </ul>
    </nav>
  );
}