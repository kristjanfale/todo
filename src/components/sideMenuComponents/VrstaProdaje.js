import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';

const VrstaProdaje = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className='btn-params'
        onClick={() => setOpen(!open)}
        aria-controls='vrstaProdaje'
        aria-expanded={open}
      >
        Vrsta prodaje
      </button>
      <Collapse in={open} id='vrstaProdaje'>
        <div>Vsta objave</div>
      </Collapse>
    </div>
  );
};

export default VrstaProdaje;
