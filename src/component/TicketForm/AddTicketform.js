import React from 'react';
import { Form, Container, Button, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './Addticketform.css';

const AddTicketform = ({ handleOnSubmit, handleOnChange, frmDt }) => {
  return (
    <div className="add-ticket-form">
      <Container>
        <div className="ticket-form-container">
          <h3 className="form-title">Add New Ticket</h3>
          <Form onSubmit={handleOnSubmit}>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">Subject</Form.Label>
              <Col sm="9">
                <Form.Control
                  type="text"
                  name="subject"
                  onChange={handleOnChange}
                  value={frmDt?.subject || ""}
                  placeholder="Enter the Subject"
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">Date</Form.Label>
              <Col sm="9">
                <Form.Control
                  type="date"
                  name="issueDate"
                  onChange={handleOnChange}
                  value={frmDt?.issueDate || ""}
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">Problem</Form.Label>
              <Col sm="9">
                <Form.Control
                  as="textarea"
                  name="textarea"
                  rows="5"
                  placeholder="Describe your problem"
                  value={frmDt?.textarea || ""}
                  onChange={handleOnChange}
                  required
                />
              </Col>
            </Form.Group>
            <div className="text-center">
              <Button type="submit" className="mt-3" variant="primary">
                Add Ticket
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    </div>
  );
};

AddTicketform.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  frmDt: PropTypes.object.isRequired,
};

export default AddTicketform;
