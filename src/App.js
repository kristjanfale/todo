import React from 'react';
import './sass/App.scss';
import './css/App.css';

import Header from './components/Header';
import SideMenu from './components/SideMenu';
import Main from './components/Main';
import Ads from './components/Ads';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <div className='content'>
        <SideMenu />
        <Main />
        <Ads />
      </div>
    </div>
  );
};

export default App;
