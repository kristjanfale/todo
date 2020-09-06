import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';

const Kraj = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className='btn-params'
        onClick={() => setOpen(!open)}
        aria-controls='kraj'
        aria-expanded={open}
      >
        Kraj
      </button>
      <Collapse in={open} id='kraj'>
        <div>Kraj</div>
      </Collapse>
    </div>
  );
};

export default Kraj;
