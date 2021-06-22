import React, {useState} from "react"
import {Col, Container, Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

function RegistrujSe(){
    const[ime,setIme]=useState("")
    const[prezime,setPrezime]=useState("")
    const[lozinka,setLozinka]=useState("")
    const[lozinka_p,setLozinkaP]=useState("")
    const[email,setEmail]=useState("")
    const[korisnickoIme,setKorisnickoIme]=useState("")
    const[tip,setTip]=useState("Profesor")
    const[status,setStatus]=useState("Aktivan")
    function pokupiPodatke(){
        axios.post('http://127.0.0.1:8000/dws/spasiKorisnika/',{
            ime:ime,
            prezime:prezime,
            lozinka:lozinka,
            email:email,
            korisnickoIme:korisnickoIme,
            status:status,
            tip:tip

        }).then(
            (response)=>{
                console.log(response)
            },
            (error) =>{
                console.log(error)
            }
        )


    }

    return(
        <Container >
            <Row>
                <Col xs={9} >
                    <Form className="registrujSe">

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Ime</Form.Label>
                            <Form.Control type="text" placeholder="Unesite ime" onChange={event => setIme(event.target.value)} />

                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Prezime</Form.Label>
                            <Form.Control type="text" placeholder="Unesite prezime" onChange={event => setPrezime(event.target.value)}/>

                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Tip korisnika </Form.Label>
                            <Form.Control as="select" onChange={event => setTip(event.target.value)}>
                                <option value="Profesor">Profesor</option>
                                <option value="Asistent">Asistent</option>
                                <option value="Šef odsjeka">Šef odsjeka</option>
                                <option value="Dekan"> Dekan</option>


                            </Form.Control>

                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Status</Form.Label>
                            <Form.Control as="select" onChange={event => setStatus(event.target.value)}>
                                <option value="Aktivan">Aktivan</option>
                                <option value="Na bolovanju">Na bolovanju</option>
                                <option value="Na godišnjem odmoru">Na godišnjem odmoru</option>
                                <option value="Neaktivan"> Neaktivan</option>


                            </Form.Control>

                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Korisničko ime</Form.Label>
                            <Form.Control type="text" placeholder="Unesite korisničko ime" onChange={event => setKorisnickoIme(event.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email adresa</Form.Label>
                            <Form.Control type="email" placeholder="Unesite email" onChange={event => setEmail(event.target.value)} />

                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Lozinka</Form.Label>
                            <Form.Control type="password" placeholder="Unesite lozinku" onChange={event => setLozinka(event.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Ponovljena lozinka</Form.Label>
                            <Form.Control type="password" placeholder="Potvrdite lozinku" onChange={event => setLozinkaP(event.target.value)} />
                        </Form.Group>

                        <Button variant="primary"  onClick={pokupiPodatke}>
                            Registruj se
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )


}

export default RegistrujSe