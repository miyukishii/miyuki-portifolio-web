import React from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import img from '../../img/my-pic.png';
import { AiOutlineDownload } from 'react-icons/ai';

export default function Home() {
  return (
    <main>
      <Header />
      <Navbar />
      <section className='home-info'>
        <h2 className='home-title'>Welcome to my portfolio!</h2>
        <div className='description'>
          <img src={img} alt="My photograph" />
          <div>
            <p className='home-text'>I'm Miyuki - a Jr. web developer searching for my first job opportunity.</p> 
            <button className='button-resume'>
                <a href='./'>
                  Resumé
                  <AiOutlineDownload style={{fontSize: '1.8em', marginLeft: '0.3em',
                color: 'black'}}/>
                </a>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}