import React, {useState} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Col, Container, Row} from "react-bootstrap";
import './Login.css'
import axios from "axios";
function Login({registruj,lozinka,pocetna,postavi}){
    const[ime,setIme]=useState("")
    const[pass,setLozinka]=useState("")
    const [pogresniPodaci,setPogresniPodaci]=useState(false)

    function pokupiPodatke(){
        console.log(ime)
        console.log(pass)
        axios.post('http://127.0.0.1:8000/dws/login/',{
            ime:ime,
            lozinka:pass
        }).then(
            (response)=>{
                console.log(response.data)
                if (response.data==="None")
                    setPogresniPodaci(!pogresniPodaci)
                else{
                   let niz= response.data.fields

                    console.log(response.data.pk)
                    console.log("Breka")
                    console.log(response.data.pk)
                    postavi(response.data.pk)
                    pocetna(niz,response.data.pk)

                }


            },
            (error) =>{
                console.log(error)
            }
        )
        // axios.get('http://127.0.0.1:8000/dws/korisnici/').then(
        //         (response)=>{
        //             console.log(response.data[0].fields.ime)
        //         },
        //         (error) =>{
        //             console.log(error)
        //         }
        //     )
    }

    return(
        <Container >
            <Row>

        <Col xs={9} >

            <Form className="login">
                {pogresniPodaci? <p>Unijeli ste pogešne podatke! </p>: <div></div>}
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Korisničko ime</Form.Label>
                    <Form.Control type="text" placeholder="Unesite korisničko ime" onChange={event => setIme(event.target.value)} />

                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Lozinka</Form.Label>
                    <Form.Control type="password" placeholder="Unesite lozinku" onChange={event => setLozinka(event.target.value)}/>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Row>
                        <Col xs={9}>
                            <Form.Text ><Button variant="link" onClick={lozinka}>Zaboravili ste lozinku?</Button></Form.Text>

                        </Col>
                        <Col><Form.Text ><Button variant="link" onClick={registruj}>Registruj se!</Button></Form.Text></Col>
                    </Row>

                </Form.Group>
                {/*<Button variant="primary" onClick={pocetna}>*/}
                <Button variant="primary" onClick={pokupiPodatke}>
                    Prijavi se
                </Button>
            </Form>
        </Col>
            </Row>
        </Container>
    )
}

export default Login