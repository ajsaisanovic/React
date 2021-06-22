import React, {useEffect, useState} from "react";
import NavBar from "./NavBar";
import './Pocetna.css'

import Predmeti from "./Predmeti";
import {Col,Row} from "react-bootstrap";
import Sidebar from "./Sidebar";
import axios from "axios";

function Pocetna({podaci,id,odjava,pred,postavke,evidencija,evidencijaR,osoblje,pocetna}){
    const[predmeti,setPredmeti]=useState([])
    function ucitajPredmete(){
        if(podaci.tip_korisnika!="Šef odsjeka" && podaci.tip_korisnika!="Dekan") {
            axios.post('http://127.0.0.1:8000/dws/ucitajPredmete/', {
                id: id

            }).then(
                (response) => {
                    console.log(response.data)
                    setPredmeti(response.data)
                    console.log(predmeti)
                    console.log("ovek")

                },
                (error) => {
                    console.log(error)
                }
            )
        }else {
            axios.post('http://127.0.0.1:8000/dws/ucitajPredmeteSve/').then(
                (response) => {
                    console.log(response.data)
                    setPredmeti(response.data)
                    console.log(predmeti)
                    console.log("ovek")

                },
                (error) => {
                    console.log(error)
                }
            )
        }
    }
    useEffect(()=>{
        ucitajPredmete()
    },[])
    return(
        <div >
            <NavBar odjava={odjava} ime={podaci.ime} prezime={podaci.prezime} status={podaci.status} />
            <Row>
                <Col xs={3}><Sidebar tip={podaci.tip_korisnika} evidencija={evidencija} evidencijaRada={evidencijaR} korisnici={osoblje} postavke={postavke} predmeti={pred} /></Col>

               <Col> <Predmeti predmeti={predmeti}/></Col>
            </Row>


        </div>
    )

}

export default Pocetna