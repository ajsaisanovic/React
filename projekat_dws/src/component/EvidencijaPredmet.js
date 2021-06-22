import React from "react";
import {Col} from "react-bootstrap";

function EvidencijaPredmet({predmet, sedmica, datum, vrsta, pocetak, kraj, brojStudenata}) {
    return (
        <Col xs={5}>
            <div className="predmetEvidencija">
                <p>Naziv predmeta: {predmet}</p>
                <p>Sedmica: {sedmica}</p>
                <p>Datum održavanja: {datum} </p>
                <p>Oblik nastave: {vrsta}</p>
                <p>Vrijeme početka nastave: {pocetak}</p>
                <p>Vrijeme kraja nastave: {kraj}</p>
                <p>Broj studenata prisutnih: {brojStudenata}</p>

            </div>
        </Col>
    )

}

export default EvidencijaPredmet