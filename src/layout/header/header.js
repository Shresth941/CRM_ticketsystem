import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../assets/img/logo.jpg';


export const Header = () => { 
  return (
    <Navbar
      expand="md"
      collapseOnSelect
      className="shadow-sm"
      style={{
        backgroundColor: 'lightblue', // Light Blue Background
        padding: '1rem 1rem',
      }}
    >
      <Container>
        {/* Brand Logo and Name */}
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img
            alt="Logo"
            src={logo}
            style={{ borderRadius: '50%', width: '40px', height: '40px' }}
            className="me-2"
          />
          <span style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>My App</span>
        </Navbar.Brand>

        {/* Toggle Button for Collapsible Navbar */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0">
          <span className="navbar-toggler-icon" />
        </Navbar.Toggle>

        {/* Collapsible Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
             <Nav.Link href="/" className="px-3">
              Dashboard
            </Nav.Link>
            <Nav.Link href="/tickets" className="px-3">
              Tickets
            </Nav.Link>
            <Nav.Link href="/" className="px-3 text-danger">
              Log Out
            </Nav.Link> 
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
