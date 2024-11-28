import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PageBreadcrumb from '../../component/breadcrum/breadcrumb';
import AddTicketform from '../../component/TicketForm/AddTicketform';

const initialFrmDt = {
  subject:"",
  issueDate: " ",
  textarea: " ",
};

const Addnewticket = () => {
  const [form, setForm] = useState(initialFrmDt);

  useEffect(() => {
    // Perform side effects when form changes
    console.log("Form updated:", form);
  }, [form]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (form) => {
    
    console.log('Form Submit request Successful', form);
  };

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="New Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketform handleOnChange={handleOnChange} frmDt={form} handleOnSubmit={handleOnSubmit} />
        </Col>
      </Row>
    </Container>
  );
};

export default Addnewticket;
