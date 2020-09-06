import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';

const PodatkiOOgledu = ({ nepremicnina }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className='main--button'
        onClick={() => setOpen(!open)}
        aria-controls='podatki'
        aria-expanded={open}
      >
        Podatki o ogledu
      </button>
      <Collapse in={open} id='podatki'>
        <div className='main--body'>
          <div>
            <h4>
              Čas ogleda:<span> {nepremicnina.časOgleda}</span>
            </h4>
            <h4>
              Kraj ogleda:<span> {nepremicnina.naslov}</span>
            </h4>
          </div>
          <div>
            <h4>
              Ogled vodi:<span> {nepremicnina.ogledVodi}</span>
            </h4>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default PodatkiOOgledu;
