import React, { useState } from 'react';
import { Collapse, Form } from 'react-bootstrap';

const Nadstropje = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className='btn-params'
        onClick={() => setOpen(!open)}
        aria-controls='nadstropje'
        aria-expanded={open}
      >
        Nadstropje
      </button>
      <Collapse in={open} id='nadstropje'>
        <Form>
          <Form.Group controlId='formBasicCheckbox'>
            <Form.Check type='checkbox' id='wan' label='wan' />
            <Form.Check type='checkbox' id='tu' label='tu' />
            <Form.Check type='checkbox' id='fri' label='fri' />
          </Form.Group>
        </Form>
      </Collapse>
    </div>
  );
};

export default Nadstropje;
