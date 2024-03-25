import React from 'react';
import background from "../img/background.png"
import Footer from './footer';
const AboutUs = () => {
    return (
        <>
            <div className="heading_about" style={{ backgroundImage: `url(${background})` }}>
                <br /><br />
                <h1 style={{ fontFamily: 'Arial', color: 'transparent', WebkitTextStroke: '2px white', textAlign: 'center' }}>About us</h1><br />
                <h4 style={{ color: 'white', textAlign: 'center' }}>(All about planet protectors)</h4>
            </div>
            <div className="about_writing"><br />
                <h1>About my SDG Project:</h1>
                <br />
                <p>Welcome to my project named Planet protectors, where I am dedicated to making a positive impact on the world through our commitment to the United Nations Sustainable Development Goals (SDGs). Here my main goal is SDG 13 that is Climate action.</p><br />
                <h1>My Mission</h1><br />
                <p>At Planet Protectors, my mission is to make this world pollution free and make sure that SDG 13 goal is fullfilled.</p><br />
                <h1>My Goals: </h1>
                <ul>
                    <li>Goal 1: Promoting Renewable energy</li>
                    <li>Goal 2: Plant more trees</li>
                    <li>Goal 3: Sustainable practices</li>
                </ul>
                <br />
                <h1>Get Involved</h1><br />
                <p>If we work together, we can achieve these goals. Join our community program and be a part of it. Share your thoughts in our community. Join us!</p><br /><br />
            </div>
            <Footer/>
        </>
    );
};

export default AboutUs;
