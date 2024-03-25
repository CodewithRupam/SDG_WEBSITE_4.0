import React from 'react'
import Footer from './footer'
import background from '../img/background2.png'
import { useState } from 'react';
import { storage } from '../config/firebase-config';
import { ref } from 'firebase/storage';
import { v4 } from 'uuid';
import { uploadBytes } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../config/firebase-config';
function Renewable() {
    const [image, newimage] = useState(null)
    const [name, newname] = useState("")
    const refrence = collection(db, "users")
    const uploadDetail = async () => {
        if (name == "") {
            alert("please enter your name")
            return;
        }
        else if (image == null) {
            alert("please select a image")
            return;
        }
        const inputElements = document.querySelectorAll('input#field');
        inputElements.forEach(input => {
            input.disabled = true;
        });
        alert("We are checking.")
        const Imageref = ref(storage, `${name}/${image.name + v4()}`)
        uploadBytes(Imageref, image).then(() => {
            alert("Image uploaded. The image will be verified and soon we will notify you about the result")
        })
        try {
            await addDoc(refrence, { Email: document.getElementById("email").value, Name: name })
        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            <br /><br />
            <div className="renewable" style={{ backgroundImage: `url(${background})` }}>
                <div className="main_renewable" style={{ color: 'white' }}>
                    <br />
                    <h1 style={{ textAlign: 'center', color: 'white', WebkitTextStroke: '2px green' }}>Powering Change: Embrace Renewable Energy</h1>
                    <div className="detail_renewable" style={{ width: '75%', margin: 'auto auto' }}><br /><br />
                        <h1 className='heading2' style={{ color: 'white' }}>All about this challenge: </h1>
                        Join us in promoting renewable energy and inspiring others to adopt sustainable practices by participating in the Renewable Energy Image Sharing Challenge. This challenge encourages you to showcase the renewable energy systems installed in your homes and communities through captivating images.
                        <br /><br />
                        <h1 className='heading2' style={{ color: 'white' }}>Objective: </h1>
                        The objective of this challenge is to raise awareness about the importance of renewable energy in combating climate change and to highlight real-world examples of renewable energy solutions in action. By sharing images of your renewable energy installations, you'll help inspire others to embrace clean energy and reduce their carbon footprint.
                        <br /><br />
                        <h1 className='heading2' style={{ color: 'white' }}>How to Participate:</h1>
                        <ol>
                            <li><b>Capture Your Renewable Energy Systems:</b> Take high-quality photographs of the renewable energy systems installed in your homes or communities. This could include solar panels, wind turbines, hydroelectric systems, geothermal heat pumps, or any other renewable energy technology.</li>
                            <li><b>Submit Your Images:</b> Use the submission form provided on our website to upload your images. You may include multiple images showcasing different aspects of your renewable energy systems.</li>
                        </ol>
                        <h1 className='heading2' style={{ color: 'white' }}>Submission Guidelines:</h1>
                        <ul>
                            <li>Images should be in high resolution and clearly depict the renewable energy systems.</li>
                            <li>Provide correct email so that we can send the result.</li>
                        </ul>
                        <h1 className='heading2' style={{ color: 'white' }}>Hero Badge: </h1>
                        <p>Once we will verify the image and make sure that the image is genuine than we will send you a Hero badge.</p>
                    </div><br /><br /><br /><br />
                    <div className="form_renewable">
                        <h1 style={{ color: 'transparent', WebkitTextStroke: '2px orange', textAlign: 'center' }}>Add all the details</h1><br />
                        <div className="main_form"><br /><br /><br />

                            <div className="input_renewable" style={{ width: '80%', margin: 'auto auto' }}>
                                <input type="text" id='field' placeholder='Name' style={{ height: '35px' }} value={name} onChange={(e) => newname(e.target.value)} />
                                <br /><br />
                                <input type="email" id='email' placeholder='Email' style={{ height: '35px' }} />
                                <br /><br />
                                <input type="text" id='field' placeholder='Add a detail' style={{ height: '35px' }} />
                                <br /><br />
                                <label class="custom-file-input">
                                    <p>Select your image file (only one image will be taken)</p>
                                    <span><b>select</b></span>
                                    <input type="file" id="image" onChange={(event) => {
                                        newimage(event.target.files[0])
                                    }} />
                                </label>
                                <button type="submit" className='btn btn-primary' onClick={uploadDetail}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div><br /><br /><br />
                <Footer />
            </div >
        </>
    )
}

export default Renewable
