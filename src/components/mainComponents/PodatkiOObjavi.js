import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';

const PodatkiOObjavi = ({ nepremicnina }) => {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <button
        className='main--button'
        onClick={() => setOpen(!open)}
        aria-controls='podatki'
        aria-expanded={open}
      >
        Podatki o objavi
      </button>
      <Collapse in={open} id='podatki'>
        <div className='main--body'>
          <img src={nepremicnina.slika} alt='slika' className='main--img' />
          <div>
            <h4>
              Oblika prodaje:<span> {nepremicnina.oblikaProdaje}</span>
            </h4>
            <h4>
              Način prodaje:<span> {nepremicnina.načinProdaje}</span>
            </h4>
            <h4>
              Vrsta prodaje:<span> {nepremicnina.vrstaProdaje}</span>
            </h4>
            <br />

            <h4>
              Opis predmeta:<span> {nepremicnina.opisPredmeta}</span>
            </h4>
          </div>
          <div>
            <h4>
              Datum in ura začetka prodaje:
              <span> {nepremicnina.začetekProdaje}</span>
            </h4>
            <h4>
              Naslov:
              <span> {nepremicnina.naslov}</span>
            </h4>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default PodatkiOObjavi;
