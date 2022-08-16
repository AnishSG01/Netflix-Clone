import React from 'react';
import Logo from '../../logo.png';
import './Header.scss';
import {Link} from 'react-router-dom';
import {FaSearch} from 'react-icons/fa';

const Header = () => {
  return (
    <div className='header'>
    <img src={Logo} alt="Logo" />
    <div>
        <Link to='/tvshows'>TV Shows</Link>
        <Link to='/movies'>Movies</Link>
        <Link to='/recentlyadded'>Recently Added</Link>
        <Link to='/mylist'>My List</Link>
    </div>
    <FaSearch />
    </div>
  )
}

export default Header