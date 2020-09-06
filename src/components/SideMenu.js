import React, { useState } from 'react';
import { Collapse, Form } from 'react-bootstrap';

import PredmetProdaje from './sideMenuComponents/PredmetProdaje';
import VrstaPredmeta from './sideMenuComponents/VrstaPredmeta';
import TipPredmeta from './sideMenuComponents/TipPredmeta';
import Nadstropje from './sideMenuComponents/Nadstropje';
import Povrsina from './sideMenuComponents/Povrsina';
import Regija from './sideMenuComponents/Regija';
import Kraj from './sideMenuComponents/Kraj';
import Sodisce from './sideMenuComponents/Sodisce';
import IzhodiscnaCena from './sideMenuComponents/IzhodiscnaCena';
import OblikaProdaje from './sideMenuComponents/OblikaProdaje';
import NacinProdaje from './sideMenuComponents/NacinProdaje';
import VrstaProdaje from './sideMenuComponents/VrstaProdaje';
import StatusObjave from './sideMenuComponents/StatusObjave';

const SideMenu = () => {
  return (
    <div className='side'>
      <p>Novo iskanje</p>
      <div className='search'>
        <PredmetProdaje />
        <VrstaPredmeta />
        <TipPredmeta />
        <Nadstropje />
        <Povrsina />
        <Regija />
        <Kraj />
        <Sodisce />
        <IzhodiscnaCena />
        <OblikaProdaje />
        <NacinProdaje />
        <VrstaProdaje />
        <StatusObjave />
      </div>
    </div>
  );
};

export default SideMenu;
