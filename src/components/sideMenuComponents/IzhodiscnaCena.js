import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';

const IzhodiscnaCena = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className='btn-params'
        onClick={() => setOpen(!open)}
        aria-controls='izhodiscnaCena'
        aria-expanded={open}
      >
        Izhodiscna cena
      </button>
      <Collapse in={open} id='izhodiscnaCena'>
        <div> Izhodiscna cena</div>
      </Collapse>
    </div>
  );
};

export default IzhodiscnaCena;
