import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BreadcrumbComp } from '../../components/breadcrumb/Breadcrumb.comp';
import { AddTicketForm } from '../../components/add-ticket-form/AddTicketForm.comp';
import { shortText, ShortText } from '../../utils/validation';

const initialFrmDt = {
    subject: "",
    issueDate: "",
    detail: ""
};

const initialFrmError = {
    subject: false,
    issueDate: false,
    detail: false
};

const AddTicket = () => {

    const [frmData, setFrmData] = useState(initialFrmDt);
    const [frmDataErro, setFrmDataErro] = useState(initialFrmError)

    useEffect(() => { }, [frmData, frmDataErro]);

    const handleOnChange = (e) => {
        const { name, value } = e.target;


        setFrmData({
            ...frmData,
            [name]: value
        });
    }



    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const isSubjectValid = await shortText(frmData.subject)

        !isSubjectValid && setFrmDataErro({
            ...initialFrmError,
            subject: !isSubjectValid,

        });

        console.log('Form request received', frmData);
    }

    return (
        <Container>
            <Row>
                <Col>
                    <BreadcrumbComp page="New Ticket" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <AddTicketForm
                        handleOnChange={handleOnChange}
                        handleOnSubmit={handleOnSubmit}
                        frmDt={frmData}
                        frmDataErro={frmDataErro} />
                </Col>
            </Row>
        </Container>
    )
}

export default AddTicket