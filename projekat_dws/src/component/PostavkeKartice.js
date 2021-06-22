import React, {useState} from "react";
import {Button, Col, FormLabel} from "react-bootstrap";
import FormaPostavke from "./FormaPostavke";
import Form from "react-bootstrap/Form";
import axios from "axios";

function PostavkeKartice({tip,status,ime,prezime,sifra,id}){
    const[forma,setForma]=useState(false)
    const[ime_novo,setImeNovo]=useState(ime)
    const[prezimeNovo,setPrezimeNovo]=useState(prezime)
    const[sifraNovo,setSifraNovo]=useState(sifra)
    const[sifraNovoPonovljena,setSifraNovoPonovljena]=useState(sifra)
    const[pogreska,setPogreska]=useState(false)
    function prikatiFormu(){
        setForma(!forma)
    }
    function sacuvaj(){
        setPogreska(false)
        if(sifraNovo===sifra)
            setPogreska(true)
        else if(sifraNovo!=sifraNovoPonovljena)
            setPogreska(true)
        else{
            axios.post('http://127.0.0.1:8000/dws/promijeniKorisnika/',{
                ime:ime_novo,
                prezime:prezimeNovo,
                lozinka:sifraNovo,
                id:id

            }).then(
                (response)=>{
                    console.log(response)
                },
                (error) =>{
                    console.log(error)
                }
            )

        }
    }

    return(
        <div className="kartica">
            <img src="https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png" />
            <p>Ime: {ime}</p>
            <p>Prezime: {prezime}</p>
            <p>Status: {status}</p>
            <p>Tip: {tip}</p>
            <Button onClick={prikatiFormu}>Promijeni</Button>
            {forma ?
                <Form className="">
                    {pogreska?
                        <FormLabel>Pogreska pri unosu lozinke, molimo Vas unesite ponovo.</FormLabel>:<div></div>
                    }
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Ime</Form.Label>
                        <Form.Control type="text" placeholder="Unesite  ime" onChange={event => setImeNovo(event.target.value)}/>

                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Prezime</Form.Label>
                        <Form.Control type="text" placeholder="Unesite prezime" onChange={event => setPrezimeNovo(event.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Lozinka</Form.Label>
                        <Form.Control type="password" placeholder="Unesite lozinku" onChange={event => setSifraNovo(event.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Potvrdite lozinku</Form.Label>
                        <Form.Control type="password" placeholder="Unesite lozinku ponovo" onChange={event => setSifraNovoPonovljena(event.target.value)}/>
                    </Form.Group>

                    <Button variant="primary" onClick={sacuvaj} >
                        Prijavi se
                    </Button>
                </Form> : <div></div>
            }
        </div>
    )

}

export default PostavkeKartice