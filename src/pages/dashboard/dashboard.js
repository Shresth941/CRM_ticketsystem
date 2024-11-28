import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Tickettable } from '../../component/table/tickettable';
import tickets from '../../assets/img/data/dummyticket.json';
import PageBreadcrumb from '../../component/breadcrum/breadcrumb';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Dashboard" />
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <Button
            variant="info"
            style={{ fontSize: '1.5rem', padding: '10px 20px' }}
            onClick={() => navigate('/new-ticket')} // Fixed syntax
          >
            Add New Ticket
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-2 mb-2">
          <div>Total Tickets: 50</div>
          <div>Pending Tickets: 50</div>
        </Col>
      </Row>
      <br />
      <Row>
        <Col className="mt-2">
          <div>Recently Added Tickets</div>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Tickettable tickets={tickets} />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
