import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/pokeball.png';
import './Navbar.css';

function Home() {
  return (
    <div className='navbar'>
      <img src={logo} className='app-logo' alt='logo' />
      <div className='menu'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/my-pokedex'>My Pokedex</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
