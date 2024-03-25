import React from 'react'
import twitter from '../img/x-removebg-preview.png'
import facebook from '../img/facebook-removebg-preview.png'
import instagram from '../img/insta-removebg-preview.png'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className='footer'><br />
            <h3 className='third'>Welcome to Planet Protectors: Uniting for Climate Action</h3><br />
            <div className="another2">
                <div className="main2">
                    <ul className='ul2'>
                        <Link to="/"><li className='li'>Home</li></Link>
                        <Link to="/challenge"><li className='li'>Challenge</li></Link>
                        <Link to="/about"><li className='li'>About</li></Link>
                    </ul>
                </div>
            </div><br />
            <div className="social">
                <h4>Connect with us: </h4>
                <div className="icons">
                    <a href="https://twitter.com/rupammandal68">
                        <img src={twitter} alt="" />
                    </a>
                    <img src={facebook} alt="" />
                    <img src={instagram} alt="" />
                </div>
            </div><br />
            <p style={{ textAlign: 'right' }}>Project by- Rupam Mandal</p>
        </div>
    )
}
