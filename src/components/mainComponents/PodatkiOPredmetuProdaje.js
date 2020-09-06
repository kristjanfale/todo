import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';

const PodatkiOPredmetuProdaje = ({ nepremicnina }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className='main--button'
        onClick={() => setOpen(!open)}
        aria-controls='podatki'
        aria-expanded={open}
      >
        Podatki o predmetu prodaje
      </button>
      <Collapse in={open} id='podatki'>
        <div className='main--body'>
          <div>
            <h4>
              Predmet prodaje:<span> {nepremicnina.vrstaPredmeta}</span>
            </h4>
            <h4>
              Nadstropje:<span> {nepremicnina.nadstropje}</span>
            </h4>
            <h4>
              Število sob:<span> {nepremicnina.sobe}</span>
            </h4>
            <h4>
              Površina:
              <span>
                {' '}
                {nepremicnina.površina} m<sup>2</sup>
              </span>
            </h4>
          </div>
          <div>
            <h4>
              Energetska izkaznica:
              <span> {nepremicnina.energetskaIzkaznica}</span>
            </h4>
            <h4>
              Tip nepremičnine:
              <span> {nepremicnina.tipNepremičnine}</span>
            </h4>
            <h4>
              Leto izgradnje:
              <span> {nepremicnina.letoIzgradnje}</span>
            </h4>
            <h4>
              Naslov:
              <span> {nepremicnina.naslov}</span>
            </h4>
          </div>
          <div>
            <h4>
              Opis:
              <span> {nepremicnina.opisPredmeta}</span>
            </h4>
            <h4>
              Oznaka:
              <span> {nepremicnina.oznaka}</span>
            </h4>
            <h4>
              Prenovljeno:
              <span> {nepremicnina.prenovljeno}</span>
            </h4>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default PodatkiOPredmetuProdaje;
