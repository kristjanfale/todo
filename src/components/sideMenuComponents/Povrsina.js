import React, { useState } from 'react';
import { Collapse, Form } from 'react-bootstrap';

const Povrsina = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className='btn-params'
        onClick={() => setOpen(!open)}
        aria-controls='povrsina'
        aria-expanded={open}
      >
        Povrsina
      </button>
      <Collapse in={open} id='povrsina'>
        <Form>
          <Form.Group controlId='formBasicCheckbox'>
            <Form.Check type='checkbox' id='veliko' label='veliko' />
            <Form.Check type='checkbox' id='srednje' label='srednje' />
            <Form.Check type='checkbox' id='malo' label='malo' />
          </Form.Group>
        </Form>
      </Collapse>
    </div>
  );
};

export default Povrsina;
