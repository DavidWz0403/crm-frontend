import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import BreadcrumbComp from '../../components/breadcrumb/Breadcrumb.comp';
import tickets from '../../assets/data/dummy-tickets.json';
import MessageHistoryComp from '../../components/message-history/MessageHistory.comp';
import UpdateTicket from '../../components/update-ticket/UpdateTicket.comp';



const Ticket = () => {
    const [message, setMessage] = useState("")

    useEffect(() => {
    }, [message])

    const handleOnChange = (e) => {
        setMessage(e.target.value);
    }

    const handleOnSubmit = () => {
        alert('Form submitted');
    }
    const ticket = tickets[0];
    return (
        <Container>
            <Row>
                <Col>
                    <BreadcrumbComp page="ticket" />
                </Col>
            </Row>
            <Row>
                <Col className="text-weight-bolder text-secondary">
                    <div className="subject">Subject: {ticket.subject}</div>
                    <div className="date">Ticket Opened: {ticket.addedAt}</div>
                    <div className="status">Status: {ticket.status}</div>
                </Col>
                <Col>
                    <div className="subject">sfsf</div>
                    <div className="date">sfsf</div>
                    <div className="status">sfsf</div>
                </Col>
                <Col>
                    <Button variant="outline-info">Close Ticket</Button>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <MessageHistoryComp msg={ticket.history} />
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <UpdateTicket msg={message} handleOnChange={handleOnChange}
                        handleOnSubmit={handleOnSubmit} />
                </Col>
            </Row>
        </Container>
    )
}

export default Ticket
