import React, {useEffect, useState} from "react";
import {Button, Col, Row} from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
function MyVerticallyCenteredModal(props) {
    const[dodatniPodaci,setDodatniPodaci]=useState([])
    useEffect(()=>{
        ucitaj()
    },[])

    function ucitaj(){
        axios.post('http://127.0.0.1:8000/dws/predmetEvidencijaDodatno/',{
           id:props.id
        }).then(
            (response)=>{
                setDodatniPodaci(response.data)
            },
            (error) =>{
                console.log(error)
            }
        )
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Pregled predmeta
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    dodatniPodaci.map((doc)=>{
                        return <div key={doc.pk}>
                            <b>Sedmica {doc.fields.sedmica} </b>
                            <span className="modul">Datum: {doc.fields.datum} </span>
                            <span className="modul">Broj studenata: {doc.fields.broj_studenata}</span>
                        </div>
                    })
                }


            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Zatvori</Button>
            </Modal.Footer>
        </Modal>
    );
}


function Predmet({naziv,vrsta,termin,id,prof}){
    const[modal,setModal]=useState(false)
    const[evidencija,setEvidencija]=useState([])

    function prikazi(){
        axios.post('http://127.0.0.1:8000/dws/ucitajDodatneInfoPredmeta/',{
            predmet:id,
            profesor:prof

        }).then(
            (response)=>{
                console.log(response.data)
                setEvidencija(response.data)
                setModal(true)

            },
            (error) =>{
                console.log(error)
            }
        )


    }

    return(

            <Col xs={3} className="predmet">
                <div >
                    <h3>Naziv: {naziv}</h3>
                    <p>Termin odrzavanja: {termin}</p>
                    {/*<p>Vrsta: {vrsta}</p>*/}
                    <Button  onClick={prikazi}>Pregled</Button>
                    <MyVerticallyCenteredModal
                        id={id}
                        show={modal}
                        onHide={() => setModal(false)}
                    />
                </div>
            </Col>


    )
}

export default Predmet