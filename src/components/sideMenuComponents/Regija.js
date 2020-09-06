import React, { useState } from 'react';
import { Collapse, Form } from 'react-bootstrap';

const Regija = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className='btn-params'
        onClick={() => setOpen(!open)}
        aria-controls='regija'
        aria-expanded={open}
      >
        Regija
      </button>
      <Collapse in={open} id='regija'>
        <Form>
          <Form.Group controlId='formBasicCheckbox'>
            <Form.Check type='checkbox' id='ful' label='ful' />
            <Form.Check type='checkbox' id='meh' label='meh' />
          </Form.Group>
        </Form>
      </Collapse>
    </div>
  );
};

export default Regija;
