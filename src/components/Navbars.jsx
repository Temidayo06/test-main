import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../assets/port.png';
import '../styles/Navbars.css'

const Navbars = () => {
    return (
        <div>
            <Navbar expand="lg" className="sticky-top nav">
                <Container>
                    <Link to='/' className='fw-bold logo text-decoration-none  p-1'> <img src={logo} alt="" width={20} height={20} />DayoDev,</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav bg-white">
                        <Nav className=" navss ms-auto gap-2 fs-6 navs">
                            <a href='#' className="href text-decoration-none navl mx-lg-3">
                                Home
                            </a>
                            <a href='#project' className="href text-decoration-none navl mx-lg-3 ">
                                Portfolio
                            </a>
                            <a href='#about' className="href text-decoration-none navl mx-lg-3 ">
                                About Me
                            </a>
                            <a href='#test' className="href text-decoration-none navl mx-lg-3 ">
                                Testimonials
                            </a>
                            <button className='navbtn'>
                                <a className='text-decoration-none' href="#above">
                                    <span className='navspan'>Contact Me</span>
                                </a>
                            </button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navbars