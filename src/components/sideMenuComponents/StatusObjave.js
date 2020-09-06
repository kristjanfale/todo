import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';

const StatusObjave = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className='btn-params'
        onClick={() => setOpen(!open)}
        aria-controls='statusObjave'
        aria-expanded={open}
      >
        Status objave
      </button>
      <Collapse in={open} id='statusObjave'>
        <div>Status objave</div>
      </Collapse>
    </div>
  );
};

export default StatusObjave;
