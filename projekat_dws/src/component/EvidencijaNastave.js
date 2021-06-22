import React, {useEffect, useState} from "react"
import {Button, Col, Row} from "react-bootstrap";
import NavBar from "./NavBar";
import EvidencijaPredmet from "./EvidencijaPredmet";
import Form from "react-bootstrap/Form";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Sidebar from "./Sidebar";
import axios from "axios";


function EvidencijaNastave({id,pred,postavke,evidencija,evidencijaR,osoblje,pocetna,info,odjava}){
    const[forma,setForma]=useState(false)
    const[predmet,setPredmet]=useState("")
    const[oblikNastavke,setOblikNastave]=useState("")
    const[sedmica,setSedmica]=useState("");
    const[datum,setDatum]=useState("");
    const[brojStudenata,setBrojStudenata]=useState(0);
    const[pocetak,setPocetak]=useState("")
    const[kraj,setKraj]=useState("")
    const[korisnik,setKorisnik]=useState(0)
    const[podaci,setPodaci]=useState([])
    const[sviPredmeti,setSviPredmeti]=useState([])

    useEffect(()=>{
        setKorisnik(id)
        procitajPodatke()
        predmetiUcitaj()
    },[forma])
    function procitajPodatke(){
        if(info.tip_korisnika!="Šef odsjeka" && info.tip_korisnika!="Dekan") {

            axios.post('http://127.0.0.1:8000/dws/ucitajEvidencije/', {
                korisnik: id

            }).then(
                (response) => {
                    console.log(response.data)


                    setPodaci(response.data)

                },
                (error) => {
                    console.log(error)
                }
            )
        }else {

            axios.post('http://127.0.0.1:8000/dws/ucitajEvidencijeSve/').then(
                (response) => {
                    console.log(response.data)


                    setPodaci(response.data)

                },
                (error) => {
                    console.log(error)
                }
            )
        }

    }
    function filtrirajPoVrsti(vrsta){
        axios.post('http://127.0.0.1:8000/dws/filtrirajEvidencijeVrsta/',{
            vrsta:vrsta
        }).then(
            (response) => {
                console.log(response.data)
                setPodaci(response.data)

            },
            (error) => {
                console.log(error)
            }
        )

    }
    function filtrirajPoSedmici(sedmicaa){
        axios.post('http://127.0.0.1:8000/dws/filtrirajEvidencijeSedmica/',{
            sedmica:sedmicaa
        }).then(
            (response) => {
                console.log(response.data)
                setPodaci(response.data)

            },
            (error) => {
                console.log(error)
            }
        )

    }
    function filtrirajPoPredmetu(predmett){
        axios.post('http://127.0.0.1:8000/dws/filtrirajEvidencijePredmet/',{
            predmet:predmett
        }).then(
            (response) => {
                console.log(response.data)
                setPodaci(response.data)

            },
            (error) => {
                console.log(error)
            }
        )

    }
    function predmetiUcitaj(){
        if(info.tip_korisnika==="Šef odsjeka" || info.tip_korisnika==="Dekan"){
            axios.post('http://127.0.0.1:8000/dws/sviPredmetiEvidencija/').then(
                (response)=>{
                    console.log(response)
                    setSviPredmeti(response.data)
                },
                (error) =>{
                    console.log(error)
                }
            )
        }else{
            axios.post('http://127.0.0.1:8000/dws/PredmetiEvidencija/',{
                id:id
            }).then(
                (response)=>{
                    console.log(response)
                    setSviPredmeti(response.data)
                },
                (error) =>{
                    console.log(error)
                }
            )
        }


    }

    function predmeti(){
        setForma(!forma)

    }


    function prikaziFormu(){
        setForma(!forma);
        // let timestamp=Math.floor(datum.getTime()/1000)
        axios.post('http://127.0.0.1:8000/dws/dodajEvidenciju/',{
            predmet:predmet,
            oblik_nastave:oblikNastavke,
            datum:datum,
            brojStudenata:brojStudenata,
            pocetak:pocetak,
            kraj:kraj,
            sedmica:sedmica,
            korisnik:korisnik

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
        <div>
            <NavBar odjava={odjava} ime={info.ime} prezime={info.prezime} status={info.status}/>
                <Row>
                    <Col xs={3}> <Sidebar tip={info.tip_korisnika} id={id} info={info} evidencija={evidencija} evidencijaRada={evidencijaR} korisnici={osoblje} pocetna={pocetna} postavke={postavke} predmeti={pred}/></Col>
                    <Col >
                        <Row>
                <Button variant="success" className="evidencija" onClick={predmeti}>+ dodaj novu evidenaciju</Button>
                    <DropdownButton className="nesto" id="dropdown-basic-button" title="Sedmica" variant="secondary">
                        <Dropdown.Item onClick={()=> filtrirajPoSedmici(1)}>1</Dropdown.Item>
                        <Dropdown.Item onClick={()=> filtrirajPoSedmici(2)}>2</Dropdown.Item>
                        <Dropdown.Item onClick={()=> filtrirajPoSedmici(3)}>3</Dropdown.Item>
                        <Dropdown.Item onClick={()=> filtrirajPoSedmici(4)}>4</Dropdown.Item>
                        <Dropdown.Item onClick={()=> filtrirajPoSedmici(5)}>5</Dropdown.Item>
                        <Dropdown.Item onClick={()=> filtrirajPoSedmici(6)}>6</Dropdown.Item>
                        <Dropdown.Item onClick={()=> filtrirajPoSedmici(7)}>7</Dropdown.Item>
                        <Dropdown.Item onClick={()=> filtrirajPoSedmici(8)}>8</Dropdown.Item>
                        <Dropdown.Item onClick={()=> filtrirajPoSedmici(9)}>9</Dropdown.Item>
                        <Dropdown.Item onClick={()=> filtrirajPoSedmici(10)}>10</Dropdown.Item>
                        <Dropdown.Item onClick={()=> filtrirajPoSedmici(11)}>11</Dropdown.Item>
                        <Dropdown.Item onClick={()=> filtrirajPoSedmici(12)}>12</Dropdown.Item>
                        <Dropdown.Item onClick={()=> filtrirajPoSedmici(13)}>13</Dropdown.Item>
                        <Dropdown.Item onClick={()=> filtrirajPoSedmici(14)}>14</Dropdown.Item>
                        <Dropdown.Item onClick={()=> filtrirajPoSedmici(15)}>15</Dropdown.Item>

                    </DropdownButton>
                    <DropdownButton id="dropdown-basic-button" title="Predmet" variant="secondary">
                        {
                            sviPredmeti.map((doc)=>{
                                return <Dropdown.Item onClick={()=> filtrirajPoPredmetu(doc.pk)}>{doc.fields.naziv}</Dropdown.Item>
                            })
                        }


                    </DropdownButton>
                    <DropdownButton id="dropdown-basic-button" title="Način održavanja" variant="secondary">
                        <Dropdown.Item  onClick={()=> filtrirajPoVrsti("Predavanje")}>Predavanje</Dropdown.Item>
                        <Dropdown.Item onClick={()=> filtrirajPoVrsti("Vježbe")}>Vježbe</Dropdown.Item>
                        <Dropdown.Item onClick={()=> filtrirajPoVrsti("Predavanje i vježbe")}>Predavanje i vježbe</Dropdown.Item>
                        <Dropdown.Item onClick={()=> filtrirajPoVrsti("Auditorne vježbe")}>Auditorne vježbe</Dropdown.Item>
                        <Dropdown.Item onClick={()=> filtrirajPoVrsti("Laboratorijske vježbe")}>Laboratorijske vježbe</Dropdown.Item>
                    </DropdownButton>
                </Row>
                    { forma?
                    <Form className="dodajEvidenciju">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Predmet </Form.Label>
                            <Form.Control as="select" onChange={event => setPredmet(event.target.value)}>
                                {
                                    sviPredmeti.map((doc)=>{
                                        return <option value={doc.pk}>{doc.fields.naziv} </option>
                                    })
                                }


                            </Form.Control>

                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Oblik nastave</Form.Label>
                            <Form.Control as="select" onChange={event => setOblikNastave(event.target.value)}>
                                <option>Predavanje</option>
                                <option>Predavanje i vježbe</option>
                                <option>Vježbe</option>
                                <option>Laboratorijske vježbe</option>
                                <option>Auditorne vježbe</option>


                            </Form.Control>

                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Datum</Form.Label>
                            <Form.Control type="date" onChange={event => setDatum(event.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Sedmica</Form.Label>
                            <Form.Control type="number" min="1" max="15" required onChange={event => setSedmica(event.target.value)}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Vrijeme početka nastave:</Form.Label>
                            <Form.Control type="time" onChange={event => setPocetak(event.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Vrijeme kraja nastave:</Form.Label>
                            <Form.Control type="time" onChange={event => setKraj(event.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Broj studenata :</Form.Label>
                            <Form.Control type="number" onChange={event => setBrojStudenata(event.target.value)}/>
                        </Form.Group>

                        <Button variant="success" onClick={prikaziFormu}>
                            Sačuvaj
                        </Button>
                    </Form> : <div></div>
                }
                <Row>
                    {podaci.map((doc)=>{
                        return <EvidencijaPredmet key={doc.pk} predmet={doc.fields.predmet} sedmica={doc.fields.sedmica} datum={doc.fields.datum} brojStudenata={doc.fields.broj_studenata}
                                                 vrsta={doc.fields.vrsta} kraj={doc.fields.kraj} pocetak={doc.fields.pocetak}/>
                    })}



        </Row>
                    </Col>
                </Row>

        </div>
    )

}

export default EvidencijaNastave