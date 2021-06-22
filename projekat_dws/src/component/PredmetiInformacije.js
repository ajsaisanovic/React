import React, {useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import PredmetInformacije from "./PredmetInformacije";
import Button from "react-bootstrap/Button";
import NavBar from "./NavBar";
import Form from "react-bootstrap/Form";
import Sidebar from "./Sidebar";
import axios from "axios";

function PredmetiInformacije({id,tip,odjava,pred,postavke,evidencija,evidencijaR,osobljee,pocetna,info}){
    const [forma,setForma]=useState(false)
    const[podaci,setPodaci]=useState([])
    const[osoblje,setOsoblje]=useState([])
    const[profesor,setProfesor]=useState("")
    const[asistent,setAsistent]=useState("")
    const[predmet,setPredmet]=useState("")
    const[predavanje,setPredavanje]=useState("")
    const[vjezbe,setVjezbe]=useState("")
    const[semestar,setSemestar]=useState(0)
    const[godina,setGodina]=useState(0)
    useEffect(()=>{
        ucitajPodatke()
    },[forma])
    function prikaziFormu(){
        setForma(!forma)
    }

    function spasi(){
        console.log(predmet,predavanje,semestar,vjezbe,profesor)
        setForma(!forma)
        axios.post('http://127.0.0.1:8000/dws/dodajNoviPredmet/',{
            naziv:predmet,
            profesor:profesor,
            asistent:asistent,
            vjezbe:vjezbe,
            predavanje:predavanje,
            semestar:semestar,
            godina:godina
        }).then(
            (response)=>{
                console.log(response.data)
            },
            (error) =>{
                console.log(error)
            }
        )
    }

    function ucitajPodatke(){
        axios.post('http://127.0.0.1:8000/dws/sviKorisniciPredmet/').then(
            (response)=>{
                console.log(response.data)
                setOsoblje(response.data)
            },
            (error) =>{
                console.log(error)
            }
        )
        if (tip==="Šef odsjeka" || tip==="Dekan"){
            axios.post('http://127.0.0.1:8000/dws/ucitajSvePredmete/').then(
                (response)=>{
                    console.log(response.data)
                    setPodaci(response.data)
                },
                (error) =>{
                    console.log(error)
                }
            )

        }
        else{
            axios.post('http://127.0.0.1:8000/dws/ucitajNekePredmete/',{
                id:id

            }).then(
                (response)=>{
                    console.log(response.data)
                    setPodaci(response.data)
                },
                (error) =>{
                    console.log(error)
                }
            )


        }
    }
    return(
        <div>
            <NavBar odjava={odjava} ime={info.ime} prezime={info.prezime} status={info.status}/>
            <Row>
                <Col xs={3}> <Sidebar pocetna={pocetna} id={id} info={info} tip={info.tip_korisnika} evidencija={evidencija} evidencijaRada={evidencijaR} korisnici={osobljee} postavke={postavke} predmeti={pred}/></Col>
                <Col >
                    <Row>

                        {tip === "Šef odsjeka" || tip === "Dekan" ?
                            <Button className="d" onClick={prikaziFormu}>+ Dodaj novi predmet</Button>:<div></div>
                        }
            {forma ?
                <Form className="dodaj_predmet">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Predmeta </Form.Label>
                        <Form.Control type="text" placeholder="Unesite naziv predmeta" onChange={event => setPredmet(event.target.value)}/>

                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Profesor </Form.Label>
                        <Form.Control as="select" onChange={event => setProfesor(event.target.value)}>
                            {
                                osoblje.map((doc)=>{
                                    return <option value={doc.pk}>{doc.fields.ime} {doc.fields.prezime}</option>
                                })
                            }

                        </Form.Control>

                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Asistent </Form.Label>
                        <Form.Control as="select" onChange={event => setAsistent(event.target.value)}>
                            {
                                osoblje.map((doc)=>{
                                    return <option value={doc.pk}>{doc.fields.ime} {doc.fields.prezime}</option>
                                })
                            }

                        </Form.Control>

                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Termin predavanja </Form.Label>
                        <Form.Control type="time" placeholder="Unesite termin predavanja" onChange={event => setPredavanje(event.target.value)}/>

                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Termin vježbi </Form.Label>
                        <Form.Control type="time" placeholder="Unesite termin vježbi" onChange={event => setVjezbe(event.target.value)}/>

                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Semestar </Form.Label>
                        <Form.Control type="number" placeholder="Unesite semestar" onChange={event => setSemestar(event.target.value)}/>

                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Godina </Form.Label>
                        <Form.Control type="number" placeholder="Unesite godinu" onChange={event => setGodina(event.target.value)}/>

                    </Form.Group>


                    <Button variant="primary" onClick={spasi}>
                        Dodaj
                    </Button>
                </Form> : <div></div>
            }
        <Row>
            {
                podaci.map((doc)=>{
                    return <PredmetInformacije key={doc.pk} naziv={doc.fields.naziv} profesor={doc.fields.profesor}
                                               asistent={doc.fields.asistent} termin_predavanja={doc.fields.termin_predavanja}
                                               termin_vjezbi={doc.fields.termin_vjezbi} osoblje={osoblje} god={godina}
                                                 id={doc.pk} tip={tip}  sem={semestar}/>

                })
            }
        </Row>
                    </Row>
                </Col>
            </Row>
        </div>
    )


}

export default PredmetiInformacije