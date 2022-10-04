import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className='page-header'>
      <div className='pages-title'>
        <h1 className='header-title'>Miyuki Ishii</h1>
        <p className='header-subtitle'>Full-stack web developer</p>
      </div>
      <div
        className='dark-mode-button'
        type='button'
      >
        <button className='switch-btn'></button>
      </div>
    </header>
  );
}