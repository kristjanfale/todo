import React, { useState } from 'react';
import { Collapse, Form } from 'react-bootstrap';

const VrstaPredmeta = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className='btn-params'
        onClick={() => setOpen(!open)}
        aria-controls='predmetPredmeta'
        aria-expanded={open}
      >
        Vrsta predmeta
      </button>
      <Collapse in={open} id='predmetPredmeta'>
        <Form>
          <Form.Group controlId='formBasicCheckbox'>
            <Form.Check type='checkbox' id='Hiše' label='Hiše' />
            <Form.Check type='checkbox' id='Stanovanja' label='Stanovanja' />
            <Form.Check
              type='checkbox'
              id='Poslovni prostori'
              label='Poslovni prostori'
            />
            <Form.Check type='checkbox' id='Vikendi' label='Vikendi' />
            <Form.Check
              type='checkbox'
              id='Počitniški objekti'
              label='Počitniški objekti'
            />
          </Form.Group>
        </Form>
      </Collapse>
    </div>
  );
};

export default VrstaPredmeta;
