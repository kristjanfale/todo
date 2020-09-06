import React from 'react';

import User from './User';
import Nav from './Navbar';

const Header = () => {
  const onClick = () => {
    document.body.classList.toggle('settings-open');
  };

  return (
    <div className='header'>
      <div className='header--top'>
        <User />

        <button className='settings-toggle' onClick={onClick}>
          <span className='arrow'></span>
        </button>

        <div className='settings'>
          <ul className='settings--list'>
            <li className='settings--item'>
              <a href='' className='settings--link'>
                <i className='fas fa-question'></i>
              </a>
            </li>
            <li className='settings--item'>
              <a href='' className='settings--link'>
                <i className='fas fa-flag'></i>
              </a>
            </li>
            <li className='settings--item'>
              <a href='' className='settings--link'>
                <i className='fas fa-volume-up'></i>
              </a>
            </li>

            <li className='settings--item'>
              <a href='' className='settings--link'>
                Odjava
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Nav />
    </div>
  );
};

export default Header;
