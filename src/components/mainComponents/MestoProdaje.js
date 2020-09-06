import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';

const MestoProdaje = ({ nepremicnina }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className='main--button'
        onClick={() => setOpen(!open)}
        aria-controls='podatki'
        aria-expanded={open}
      >
        Mestop prodaje
      </button>
      <Collapse in={open} id='podatki'>
        <div className='main--body'>
          <div>
            <h4>Mesto prodaje</h4>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default MestoProdaje;
