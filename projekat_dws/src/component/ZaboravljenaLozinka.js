import React from "react";
import {Col, Container, FormLabel, Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function ZaboravljenaLozinka(){

    return(
        <Container >
            <Row>
                <Col xs={9} >
                    <Form className="login">
                        <FormLabel>Ukoliko ste zaboravili lozinku unesite email kako bismo Vam poslali novu!</FormLabel>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email adresa</Form.Label>
                            <Form.Control type="email" placeholder="Unesite email" />

                        </Form.Group>


                        <Button variant="primary" type="submit">
                            Pošalji email
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )

}

export default ZaboravljenaLozinka