import React from "react";
import Form from "react-bootstrap/Form";
import {Col, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";

function FormaPostavke(){
    return(
        <Form className="">
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Ime</Form.Label>
                <Form.Control type="text" placeholder="Unesite  ime" />

            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Prezime</Form.Label>
                <Form.Control type="text" placeholder="Unesite prezime" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Lozinka</Form.Label>
                <Form.Control type="password" placeholder="Unesite lozinku" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Potvrdite lozinku</Form.Label>
                <Form.Control type="password" placeholder="Unesite lozinku" />
            </Form.Group>

            <Button variant="primary" >
                Prijavi se
            </Button>
        </Form>
    )
}

export default FormaPostavke