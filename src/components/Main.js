import React from 'react';
import { useSelector } from 'react-redux';
import PodatkiOObjavi from './mainComponents/PodatkiOObjavi';
import PodatkiOPredmetuProdaje from './mainComponents/PodatkiOPredmetuProdaje';
import PodatkiOProdaji from './mainComponents/PodatkiOProdaji';
import PodatkiOOgledu from './mainComponents/PodatkiOOgledu';
import MestoProdaje from './mainComponents/MestoProdaje';
import PodatkiONaroku from './mainComponents/PodatkiONaroku';
import Priloge from './mainComponents/Priloge';
import PodatkiOVarscini from './mainComponents/PodatkiOVarscini';

const Main = () => {
  const nepremicnina = useSelector((state) => state.nepremicnine[0]); // Pravo nepremicnino iz state.nepremicnine dobim, ko bo ID iz URL enak ID od nepremicnine

  return (
    <div className='main'>
      <div className='main--details'>
        <p>Datum objave: {nepremicnina.datumObjave}</p>
        <p>Št. objave: {nepremicnina.id}</p>
        <p>Cena: {nepremicnina.cena}€</p>
      </div>
      <h1 className='main--title'>{nepremicnina.vrstaPredmeta}</h1>
      <PodatkiOObjavi nepremicnina={nepremicnina} />
      <PodatkiOPredmetuProdaje nepremicnina={nepremicnina} />
      <PodatkiOProdaji nepremicnina={nepremicnina} />
      <PodatkiOOgledu nepremicnina={nepremicnina} />
      <MestoProdaje nepremicnina={nepremicnina} />
      <PodatkiONaroku nepremicnina={nepremicnina} />
      <Priloge nepremicnina={nepremicnina} />
      <PodatkiOVarscini nepremicnina={nepremicnina} />

      <div className='main--foot'>
        <button className='foot--button'>Nazaj</button>
        <button className='foot--button'>Želim sodelovati</button>
        <button className='foot--button'>
          <i className='fas fa-print'></i>
        </button>
      </div>
    </div>
  );
};

export default Main;
