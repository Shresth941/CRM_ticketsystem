import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import PageBreadcrumb from '../../component/breadcrum/breadcrumb';
import Search from '../../component/Search/Search';
import { Tickettable } from '../../component/table/tickettable';
import tickets from '../../assets/img/data/dummyticket.json';
import { useNavigate } from 'react-router-dom';

const ListingPage = () => {
  const [str, setStr] = useState("");
  const [dipticket, setDipticket] = useState(tickets); 

  // Correct useEffect usage
  useEffect(() => {
    if (!str) {
      setDipticket(tickets); 
    }
  }, [str]);

  const handleOnChange = (e) => {
    const value = e.target.value;
    setStr(value);
    ticketsearch(value);
  };

  const ticketsearch = (searchStr) => {
    const displaytickets = tickets.filter((row) =>
      row.subject.toLowerCase().includes(searchStr.toLowerCase()) 
    );
    setDipticket(displaytickets);
  };
  const navigate=useNavigate()

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Ticket List" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button className="mt-4" variant="info" onClick={()=>{navigate('/new-ticket')}}>Add New Ticket</Button>
        </Col>
        <Col className="text-right">
          <Search handleOnChange={handleOnChange} str={str} />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <Tickettable tickets={dipticket} /> 
        </Col>
      </Row>
    </Container>
  );
};

export default ListingPage;
