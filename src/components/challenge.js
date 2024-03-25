import React from 'react'
import challengebg from '../img/challenge.png'
import Footer from './footer'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'

function Challenge() {
    return (
        <div className="challenge-bg" style={{ backgroundImage: `url(${challengebg})` }}>
            <div className="challenge-page"><br /><br />
                <div className="header"><br />
                    <h1 style={{ fontFamily: 'Georgia', WebkitTextStroke: '2px white' }}>Welcome to Our Challenge Page</h1><br /><br />

                    <h5 style={{ color: 'white', fontFamily: 'Times New Roman' }}>Take action towards achieving sustainable development goals by participating in various challenges</h5>
                </div>
                <h2 style={{ color: 'white', fontFamily: 'Times New Roman', WebkitTextStroke: '1px white', color: 'transparent' }}>Challenges:</h2><br /><br />
                <div className="challenges"><br />
                    <motion.div animate={{ x: 0, y: 0, scale: 1, rotate: 360 }} whileHover={{ scale: 1.1 }} className="challenge"><br />
                        <h5>Powering Change: Embrace Renewable Energy</h5>
                        <p>objective of the challenge is to encourage individuals or communities to transition to renewable energy solutions to reduce carbon emissions.</p>
                        <Link to="/renewable">
                            <button className='btn btn-primary'>Take challenge</button>
                        </Link>
                    </motion.div><br />
                    <motion.div animate={{ x: 0, y: 0, scale: 1, rotate: 360 }} whileHover={{ scale: 1.1 }} className="challenge"><br />
                        <h5>Reduce Carbon Footprint Challenge</h5>
                        <p>objective of the challenge is to encourage participants to reduce their carbon footprint and adopt sustainable behaviors.</p>
                        <Link to="/footprint">
                            <button className='btn btn-primary'>Take challenge</button>
                        </Link>
                    </motion.div>
                </div><br />
                <div className="join">
                    <h2>Join the Challenge:</h2>
                    <ul>
                        <li>Take up a challenge.</li>
                        <li>Come up with Idea's and implement it in real life.</li>
                        <li>Share picture of your idea with us.</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Challenge
