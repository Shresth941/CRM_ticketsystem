import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Search = ({ handleOnChange, str }) => {
  return (
    <div>
      <Form>
        <Form.Group as={Row}>
          <Form.Label column sm="3"></Form.Label>
          <Col sm="9">
            <Form.Control
              name="search"
              onChange={handleOnChange}
              value={str}
              placeholder="Search..."
              type="text"
            />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

Search.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  str: PropTypes.string.isRequired,
};

export default Search;
