import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';

const Sodisce = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className='btn-params'
        onClick={() => setOpen(!open)}
        aria-controls='sodisce'
        aria-expanded={open}
      >
        Sodisce
      </button>
      <Collapse in={open} id='sodisce'>
        <div> Sodisce</div>
      </Collapse>
    </div>
  );
};

export default Sodisce;
