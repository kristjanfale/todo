import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';

const PodatkiONaroku = ({ nepremicnina }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className='main--button'
        onClick={() => setOpen(!open)}
        aria-controls='podatki'
        aria-expanded={open}
      >
        Podatki o naroku
      </button>
      <Collapse in={open} id='podatki'>
        <div className='main--body'>
          <div>
            <h4>Podatki o naroku</h4>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default PodatkiONaroku;
