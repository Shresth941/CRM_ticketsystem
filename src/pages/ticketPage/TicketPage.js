import React, { useState,useEffect } from 'react'
import {Container,Row,Col,Button} from 'react-bootstrap'
import PageBreadcrumb from '../../component/breadcrum/breadcrumb'
import tickets from "../../assets/img/data/dummyticket.json"
import Messagehistory from '../../component/messageHIstory/messagehistory'
import Updateticket from '../../component/updateticket/Updateticket'
const ticket=tickets[0]
const TicketPage = () => {
    const [message,setMessage]=useState('')
    useEffect(()=>{},[message]);
    const handleOnChange =(e) =>{
        setMessage(e.target.value)
    }
    const handleOnSubmit=(e)=>{
        e.preventDefault()
        alert('Form Submitted ')
        
    }
  return (
    
        <Container>
            <Row>
                <Col>
                <PageBreadcrumb page="Ticket"/>
                </Col>
            </Row>
            <Row>
                <Col className='text-weight-bolder text-secondary'>
               <div className='subject'>Subject:{ticket.subject}</div>
               <div className='date'>Date:{ticket.addedAt}</div>
               <div className='status'>Status:{ticket.status}</div>
    
    
                </Col>
                <Col className='text-right'>
                <Button variant="outline-info text-right">Close Ticket</Button>
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col>
                <Messagehistory msg={ticket.history}/>
                </Col>
            </Row>
            <hr/>
            <Row className='mt-4'>
                <Col>
               <Updateticket msg={message} handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit}/>
                </Col>
            </Row>
        </Container>
   
  )
}

export default TicketPage