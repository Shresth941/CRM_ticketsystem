import React from 'react';
import PropTypes from 'prop-types'; // Correct import
import { Form, Button } from 'react-bootstrap'; // Correct usage

const Updateticket = ({ msg, handleOnChange, handleOnSubmit}) => {
  return (
    <Form onSubmit={handleOnSubmit}>
      <div>
        <Form.Label>Reply</Form.Label>
      </div>

      <Form.Text>Please Update the Ticket</Form.Text>
      <Form.Control
        value={msg}
        as="textarea"
        rows="5"
        name="detail"
        onChange={handleOnChange} // Ensure this is passed as a prop
      />
      <div className="text-right mt-3 mb-3">
        <Button variant="info" type="submit" >
          Reply
        </Button>
      </div>
    </Form>
  );
};

Updateticket.propTypes = {
  msg: PropTypes.string.isRequired, 
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
};

export default Updateticket;
