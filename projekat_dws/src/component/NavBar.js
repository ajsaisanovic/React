import React from "react"
import {FormControl} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from 'react-bootstrap/Button';
import './Pocetna.css'
import NavDropdown from "react-bootstrap/NavDropdown";


function NavBar({odjava,ime,status,prezime}) {
    return (
        <div className="fiksiraj">

            <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                <Navbar.Brand href="">
                    <img
                        alt=""
                        src="https://scontent.ftzl2-1.fna.fbcdn.net/v/t1.6435-9/164505555_110720821108581_840677352078714069_n.png?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=uUTp2xigqkoAX_j1w1h&_nc_ht=scontent.ftzl2-1.fna&oh=aae11cc3e3017deafac1626c84fc4f9a&oe=60CB57FE"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    PMF evidencija nastave</Navbar.Brand>
                <Nav className="mr-auto" >

                    <Nav.Link href="">Korisnik: {ime} {prezime}</Nav.Link>
                    <Nav.Link href="">Status: {status}</Nav.Link>

                </Nav>
                <Button variant="secondary" onClick={odjava}>Odjavi se</Button>
            </Navbar>
        </div>
    )
}

export default NavBar