import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';

const OblikaProdaje = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className='btn-params'
        onClick={() => setOpen(!open)}
        aria-controls='oblikaProdaje'
        aria-expanded={open}
      >
        Oblika prodaje
      </button>
      <Collapse in={open} id='oblikaProdaje'>
        <div>Oblika prodaje</div>
      </Collapse>
    </div>
  );
};

export default OblikaProdaje;
