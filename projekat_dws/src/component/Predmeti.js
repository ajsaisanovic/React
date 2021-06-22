import React from "react";
import {Row} from "react-bootstrap";
import Predmet from "./Predmet";

function Predmeti({predmeti}){
    return(
        <Row>
            {
                predmeti.map((predmet)=>{
                    return <Predmet key={predmet.pk} prof={predmet.fields.profesor} id={predmet.pk} naziv={predmet.fields.naziv} termin={predmet.fields.termin_predavanja}/>
                })
            }
            {/*<Predmet naziv="Mobilne aplikacija" termin="11/02/2021" vrsta="Vjezbe"/>*/}
            {/*<Predmet naziv="Mobilne aplikacija" termin="11/02/2021" vrsta="Vjezbe"/>*/}
            {/*<Predmet naziv="Mobilne aplikacija" termin="11/02/2021" vrsta="Vjezbe"/>*/}
            {/*<Predmet naziv="Mobilne aplikacija" termin="11/02/2021" vrsta="Vjezbe"/>*/}
            {/*<Predmet naziv="Mobilne aplikacija" termin="11/02/2021" vrsta="Vjezbe"/>*/}
        </Row>
    )

}

export default Predmeti