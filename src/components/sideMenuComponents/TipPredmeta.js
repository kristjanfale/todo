import React, { useState } from 'react';
import { Collapse, Form } from 'react-bootstrap';

const TipPredmeta = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className='btn-params'
        onClick={() => setOpen(!open)}
        aria-controls='tipPredmeta'
        aria-expanded={open}
      >
        Tip predmeta
      </button>
      <Collapse in={open} id='tipPredmeta'>
        <Form>
          <Form.Group controlId='formBasicCheckbox'>
            <Form.Check type='checkbox' id='opa' label='opa' />
            <Form.Check type='checkbox' id='neke' label='neke' />
            <Form.Check type='checkbox' id='neke neke' label='neke neke' />
            <Form.Check type='checkbox' id='kr neke' label='kr neke' />
          </Form.Group>
        </Form>
      </Collapse>
    </div>
  );
};

export default TipPredmeta;
