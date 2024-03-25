import React, { useState } from 'react'
import backgroundImage from '../img/background.png'
import Footer from './footer'
import { signInWithPopup } from 'firebase/auth'
import { auth } from '../config/firebase-config'
import google from "../img/google-removebg-preview.png"
import { googleAuth } from '../config/firebase-config';
import { Link } from 'react-router-dom'

function Join() {
    let [signtext, setsigntext] = useState("")
    let [path, setpath] = useState("/join")
    let [heading, setheading] = useState("We are happy to know that you are ready to join our community")
    const click = async (e) => {
        e.preventDefault();
        try {
            await signInWithPopup(auth, googleAuth)
            await setsigntext("Your email is verified");
        }
        catch (error) {
            alert(error.message)
            setsigntext("Your email isn't verified")
        }

    };
    const click2 = () => {
        if (signtext === "Your email is verified") {
            setpath("/")
            alert("You have successfully joined our community soon we will reach you")
            let field = document.querySelector("#field");
            const inputElements = document.querySelectorAll('input#field');
            inputElements.forEach(input => {
                input.disabled = true;
            });
            setheading("You have successfully joined our community")
            let main = document.getElementById("main");
            main.innerHTML = ""
        }
        else {
            setpath("/join");
            setsigntext("Your email isn't verified")
            alert("Sorry please re-fill the form")
        }
    }
    return (
        <><br /><br />
            <div className="sign_in">
                <div className="img_sign" style={{ backgroundImage: `url(${backgroundImage})` }}><br /><br /><br /><br /><br />
                    <h1 style={{ color: 'white', textAlign: 'center', fontFamily: 'Times New Roman', margin: '0% 10%' }}>{heading}</h1><br /><br />
                </div>
                <div className="form_sign"><br />
                    <h1 className='heading7'>Join us</h1>
                    <div className="page_sign"><br /><br /><br />
                        <div className="page_sign2">
                            <h3 style={{ textAlign: 'center', fontFamily: 'Times New Roman', }}>Please fill out the form</h3>
                            <br />
                            <input type="text" className='input2' placeholder='name' id="field" required /><br />
                            <input type="number" className='input2' placeholder='mobile number' id='field' required /><br />
                            <input type="text" className='input2' placeholder='Your thoughts about our community program' id='field' style={{ height: '100px' }} required />
                            <div className="sign_in_logo">
                                <p>Add your google account</p>
                                <img src={google} alt="" style={{ height: '60px', width: '60px', borderRadius: '50px' }} onClick={click} />
                                <p style={{ fontSize: '15px' }}>{signtext}</p>
                            </div>
                            <Link to={path}>
                                <div id="main">
                                    <input type="submit" style={{ height: '50px', width: '100%', backgroundColor: 'black', color: 'white', borderRadius: '50px' }} id='sign' onClick={click2} />
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>
                <br />
            </div>
            <Footer />
        </>
    )
}

export default Join;
