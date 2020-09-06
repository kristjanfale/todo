import React, { useState } from 'react';
import { Collapse, Form } from 'react-bootstrap';

const PredmetProdaje = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className='btn-params'
        onClick={() => setOpen(!open)}
        aria-controls='predmetProdaje'
        aria-expanded={open}
      >
        Predmet prodaje
      </button>
      <Collapse in={open} id='predmetProdaje'>
        <Form>
          <Form.Group controlId='formBasicCheckbox'>
            <Form.Check type='checkbox' id='Bu' label='Bu' />
            <Form.Check type='checkbox' id='De' label='De' />
            <Form.Check type='checkbox' id='Sa' label='Sa' />
            <Form.Check type='checkbox' id='Kek' label='Kek' />
          </Form.Group>
        </Form>
      </Collapse>
    </div>
  );
};

export default PredmetProdaje;
