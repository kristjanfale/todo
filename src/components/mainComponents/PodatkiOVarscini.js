import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';

const PodatkiOVarščini = ({ nepremicnina }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className='main--button'
        onClick={() => setOpen(!open)}
        aria-controls='podatki'
        aria-expanded={open}
      >
        Podatki o varščini
      </button>
      <Collapse in={open} id='podatki'>
        <div className='main--body'>
          <div>
            <h4>
              Višina varščine:<span> {nepremicnina.višinaVarščine}€</span>
            </h4>
            <h4>
              Rok za nakazilo varščine:
              <span> {nepremicnina.rokZaNakaziloVarščine}</span>
            </h4>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default PodatkiOVarščini;
