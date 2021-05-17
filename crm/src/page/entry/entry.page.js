import React, { useState } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron'
import Login from '../../components/Login/login.comp';
import ResetPassword from '../../components/password-reset/Passwordreset.comp.js'
import './entry.style.css';
const Entry = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [frmLoad, setFrmLoad] = useState("login");

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case 'email':
                setEmail(value)
                break;

            case 'password':
                setPassword(value)
                break;

            default:
                break;
        }

    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            return alert('Fill up all the form!');
        }

        console.log(email, password)
    };

    const formSwitcher = (frmType) => {
        setFrmLoad(frmType);
    }

    const handleOnResetSubmit = (e) => {
        e.preventDefault();
        if (!email) {
            return alert('Please enter the email!');
        }

        console.log(email)
    };
    return (
        <div className="entry-page bg-info">
            <Jumbotron className="form-box">
                {frmLoad === 'login' && <Login
                    handleOnChange={handleOnChange}
                    email={email}
                    pass={password}
                    handleOnSubmit={handleOnSubmit}
                    formSwitcher={formSwitcher} />}
                {frmLoad === 'reset' && <ResetPassword
                    handleOnChange={handleOnChange}
                    email={email}
                    handleOnResetSubmit={handleOnResetSubmit}
                    formSwitcher={formSwitcher} />}

            </Jumbotron>
        </div>
    )
}

export default Entry; 