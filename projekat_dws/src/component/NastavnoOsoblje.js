import React, {useEffect, useState} from "react";
import NavBar from "./NavBar";
import {Col, Container, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Sidebar from "./Sidebar";
import axios from "axios";

function NastavnoOsoblje({profesori, asitenti,odjava,pred,postavke,evidencija,evidencijaR,osoblje,pocetna,info,id}) {
    const [forma, setForma] = useState(false);
    const [podaci, setPodaci] = useState([]);
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
        setForma(!forma)


    }

    function prikaziFormu() {
        setForma(!forma)
    }
    useEffect(()=>{
        ucitaj()
    },[forma])

    function ucitaj(){
        axios.post('http://127.0.0.1:8000/dws/sviKorisniciPredmet/').then(
            (response)=>{
                console.log(response)
                setPodaci(response.data)
            },
            (error) =>{
                console.log(error)

            }
        )
    }

    return (
        <div>
            <NavBar odjava={odjava} ime={info.ime} prezime={info.prezime} status={info.status}/>
            <Row>
                <Col xs={3}> <Sidebar tip={info.tip_korisnika} pocetna={pocetna} id={id} info={info} evidencija={evidencija} evidencijaRada={evidencijaR} korisnici={osoblje} postavke={postavke} predmeti={pred}/></Col>


                    <Col>
                    <Row>
                    <Col xs={6} className="profesori">
                        <h5>Nastavno osoblje: </h5>
                        {
                            podaci.map((doc) => {

                                return <p className={doc.fields.status==="Neaktivan"? "crvena1":
                                    doc.fields.status==="Na godišnjem odmoru"? "zuta":
                                        doc.fields.status==="Na bolovanju"? "narandzasta":"zelena1"}>{doc.fields.ime}  {doc.fields.prezime}<span className="desno">({doc.fields.tip_korisnika})</span> </p>
                            })
                        }


                    </Col>



                    </Row><br/>
                        <Button className="forma_korisnik_button" onClick={prikaziFormu}>+ Dodaj novog korisnika</Button>
                            {forma ?
                                // <Form className="forma_korisnik">
                                //     <Form.Group controlId="formBasicEmail">
                                //         <Form.Label>Ime</Form.Label>
                                //         <Form.Control type="text" placeholder="Unesite  ime"/>
                                //
                                //     </Form.Group>
                                //
                                //     <Form.Group controlId="formBasicPassword">
                                //         <Form.Label>Prezime</Form.Label>
                                //         <Form.Control type="text" placeholder="Unesite prezime"/>
                                //     </Form.Group>
                                //     <Form.Group controlId="formBasicEmail">
                                //         <Form.Label>Tip korisnika </Form.Label>
                                //         <Form.Control as="select">
                                //             <option>Profesor</option>
                                //             <option>Asistent</option>
                                //             <option>Dekan</option>
                                //             <option>Šef odsjeka</option>
                                //
                                //         </Form.Control>
                                //
                                //     </Form.Group>
                                //
                                //     <Button variant="primary">
                                //         Dodaj
                                //     </Button>
                                // </Form> : <div></div>

                                <Form className="forma_korisnik">

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
                                </Form>:<div></div>
                            }
                    </Col>





            </Row>

        </div>
    )

}

export default NastavnoOsoblje