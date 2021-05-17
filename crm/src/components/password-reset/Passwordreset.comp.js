import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ResetPassword = ({ handleOnChange, email, handleOnResetSubmit, formSwitcher }) => {

    // const handleOnChangeEmail = props.handleOnChangeEmail;
    // const handleOnChangePass = props.handleOnChangePass;
    // const password = props.password;
    // const email = props.email;

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h1 className="text-info text-center headline">Reset Password</h1>
                        <hr />
                        <Form autoComplete="off">
                            <Form.Group>
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="email"
                                    onChange={handleOnChange}
                                    value={email}
                                    name="email"
                                    placeholder="Enter email"
                                    required />
                            </Form.Group>

                            <Button type="submit" onClick={handleOnResetSubmit}>Login</Button>
                        </Form>
                        <hr />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <a href="#!" onClick={() => formSwitcher('login')}>Login now</a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

ResetPassword.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired
}

export default ResetPassword; 