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
function Carbon_reduce() {
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
      <div className="renewable" style={{ backgroundImage: `url(${background})`, height: '2050px' }}>
        <div className="main_renewable" style={{ color: 'white' }}>
          <br />
          <h1 style={{ textAlign: 'center', color: 'white', WebkitTextStroke: '2px green' }}>Carbon Footprint Challenge</h1>
          <div className="detail_renewable" style={{ width: '75%', margin: 'auto auto' }}><br /><br />
            <h1 className='heading2' style={{ color: 'white' }}>All about this challenge: </h1>
            Welcome to the Carbon Footprint Challenge & Image Sharing Competition! Join us in our mission to reduce carbon emissions and combat climate change while showcasing your efforts through images.
            <br /><br />
            <h1 className='heading2' style={{ color: 'white' }}>Challenge Tasks: </h1>
            <ol>
              <li><b>Reduce Energy Consumption:</b> Take steps to lower your energy usage at home. Turn off lights and appliances when not in use, switch to energy-efficient LED bulbs, and unplug electronics when they're fully charged.</li>
              <li><b>Choose Sustainable Transportation:</b> Opt for eco-friendly transportation options whenever possible. Walk, bike, carpool, or use public transportation instead of driving alone in a car. Consider investing in an electric vehicle or hybrid car.</li>
              <li><b>Minimize Waste:</b> Practice waste reduction by recycling, composting, and reducing single-use items. Bring reusable bags to the grocery store, use a refillable water bottle, and avoid disposable plastic products.</li>
              <li><b>Eat Plant-Based Meals:</b> Incorporate more plant-based foods into your diet and reduce your consumption of meat and dairy products. Plant-based meals have a lower carbon footprint and are better for your health.</li>
              <li><b>Support Renewable Energy:</b> Advocate for and support the transition to renewable energy sources such as solar and wind power. Consider installing solar panels on your home or purchasing renewable energy from your utility provider.</li>
            </ol>
            <br /><br />
            <h1 className='heading2' style={{ color: 'white' }}>How to Participate:</h1>
            <ol>
              <li><b>Take high quality image: </b> Take a photo showcasing your carbon footprint reduction efforts.</li>
              <li><b>Submit Your Images:</b> Use the submission form provided on our website to upload your images. We will accept only one image.</li>
            </ol>
            <h1 className='heading2' style={{ color: 'white' }}>Submission Guidelines:</h1>
            <ul>
              <li>Images should be in high resolution and clearly depict the renewable energy systems.</li>
              <li>Provide correct email so that we can send the badge.</li>
            </ul>
            <h1 className='heading2' style={{color: 'white'}}>Hero Badge: </h1>
            <p>Once we will verify the image and make sure that the image is genuine than we will send you a Hero badge.</p>
          </div><br />
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
        </div><br /><br /><br /><br />
        <Footer />
      </div >
    </>
  )
}

export default Carbon_reduce
