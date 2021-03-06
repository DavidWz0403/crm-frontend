import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import BreadcrumbComp from '../../components/breadcrumb/Breadcrumb.comp';
import SearchForm from "../../components/search-form/SearchForm.comp";
import TicketTable from '../../components/ticket-table/TicketTable.comp';
import tickets from '../../assets/data/dummy-tickets.json';

const TicketLists = () => {

    const [str, setString] = useState("");
    const [dispTicket, setDispTicket] = useState(tickets);

    useEffect(() => {
    }, [str, dispTicket]);

    const handleOnChange = (e) => {
        const { value } = e.target;
        setString(value);
        searchTicket(value);
    }

    const searchTicket = sttr => {
        const displayTickets = tickets.filter(row => row.subject.toLowerCase().
            includes(sttr.toLowerCase()))
        console.log(displayTickets);
        setDispTicket(displayTickets);
    }
    return (
        <Container>
            <Row>
                <Col>
                    <BreadcrumbComp page="Ticket Lists" />
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <Button variant="info">Add new Ticket</Button>
                </Col>

                <Col className="text-right"><SearchForm handleOnChange={handleOnChange} str={str} /></Col>

            </Row>
            <hr />
            <Row>
                <Col>
                    <TicketTable tickets={dispTicket} />
                </Col>
            </Row>
        </Container>
    )
}

export default TicketLists; 
