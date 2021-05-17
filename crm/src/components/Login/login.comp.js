import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import PropTypes from 'prop-types';

const Login = ({ handleOnChange, email, pass, handleOnSubmit, formSwitcher }) => {

    // const handleOnChangeEmail = props.handleOnChangeEmail;
    // const handleOnChangePass = props.handleOnChangePass;
    // const password = props.password;
    // const email = props.email;

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h1 className="text-info text-center headline">Client Login</h1>
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
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password"
                                    onChange={handleOnChange}
                                    value={pass}
                                    name="password"
                                    placeholder="password"
                                    required />
                            </Form.Group>
                            <Button type="submit" onClick={handleOnSubmit}>Login</Button>
                        </Form>
                        <hr />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <a href="#!" onClick={() => formSwitcher('reset')}>Forget Password</a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

Login.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired
}

export default Login; 