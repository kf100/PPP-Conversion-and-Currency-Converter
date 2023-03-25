import Navbar from "react-bootstrap/Navbar";
import "./css/navbar.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/dist/react-bootstrap.min.js";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faMoneyCheckDollar} from '@fortawesome/free-solid-svg-icons';
import {faWallet} from '@fortawesome/free-solid-svg-icons';
import './css/navbar.css';
import React from 'react';

const Navbar1 = () => {
    return (
        <div>
            <Navbar className="navcolor navborder fixed-top"> 
                <Container>
                    <Navbar.Brand>
                        {/* <FontAwesomeIcon icon={faMoneyCheck} pull="left" size="2x" /> */}
                        <style>
                            @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
                        </style>
                        <FontAwesomeIcon icon={faWallet} pull="left" size="2x" /><h2 className="font">Converter</h2>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navbar1;
