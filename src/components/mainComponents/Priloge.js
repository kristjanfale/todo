import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';

const Priloge = ({ nepremicnina }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className='main--button'
        onClick={() => setOpen(!open)}
        aria-controls='podatki'
        aria-expanded={open}
      >
        Priloge
      </button>
      <Collapse in={open} id='podatki'>
        <div className='main--body'>
          <div>
            <h4>Priloge</h4>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default Priloge;
