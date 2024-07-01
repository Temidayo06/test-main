import React from 'react'
import '../styles/Footer.css'
import logo from '../assets/port.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <Link to='/' className='fw-bold logo text-decoration-none  p-1'> <img src={logo} alt="" width={20} height={20} />DayoDev,</Link>
            <h3 className='footerh3'>
                &copy; 2024 Dayo
            </h3>
        </div>
    )
}

export default Footer