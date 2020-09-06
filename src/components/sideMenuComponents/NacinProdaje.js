import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';

const NacinProdaje = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className='btn-params'
        onClick={() => setOpen(!open)}
        aria-controls='nacinProdaje'
        aria-expanded={open}
      >
        Nacin prodaje
      </button>
      <Collapse in={open} id='nacinProdaje'>
        <div>Nacin prodaje</div>
      </Collapse>
    </div>
  );
};

export default NacinProdaje;
