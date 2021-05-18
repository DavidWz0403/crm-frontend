import React from 'react'
import { Form, Jumbotron, Row, Col, Button } from "react-bootstrap";
import PropTypes from 'prop-types';
import './add-ticket-form.css';


export const AddTicketForm = ({ handleOnSubmit, handleOnChange, frmDt, frmDataErro }) => {
    console.log(frmDt);

    return (
        <Jumbotron className="mt-3 add-new-ticket bg-light">
            <h1 className="text-info text-center">Add New Ticket</h1>
            <hr />
            <Form autoComplete="off" onSubmit={handleOnSubmit}>
                <Form.Group className="m-auto" as={Row}>
                    <Form.Label column sm={3}>Subject</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            onChange={handleOnChange}
                            value={frmDt.subject}
                            // minLength="3"
                            maxLength="100"
                            name="subject"
                            placeholder="Subject"
                            required />
                        <Form.Text className="text-danger">{frmDataErro.subject && "Subject is required"}</Form.Text>
                    </Col>

                </Form.Group>
                <Form.Group className="m-auto" as={Row}>
                    <Form.Label column sm={3}>Issue found</Form.Label>
                    <Col sm={9}>
                        <Form.Control type="date"
                            name="issueDate"

                            value={frmDt.issueDate}
                            onChange={handleOnChange}
                            required />
                    </Col>

                </Form.Group>

                <Form.Group className="m-auto">
                    <Form.Label>Password</Form.Label>
                    <Form.Control as="textarea"
                        onChange={handleOnChange}
                        value={frmDt.detail}
                        name="detail"
                        rows="5"
                        required />
                </Form.Group>
                <Button type="submit" >Login</Button>
            </Form>
        </Jumbotron>
    )
}

AddTicketForm.propTypes = {
    handleOnSubmit: PropTypes.func.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    frmDt: PropTypes.object.isRequired,
    frmDataError: PropTypes.object.isRequired,
}
