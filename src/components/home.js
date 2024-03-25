import React from 'react'
import Typed from 'typed.js';
import background from '../img/background.png'
import Image2 from "../img/sdg_logo.png"
import Image3 from "../img/bulb.png"
import Image4 from "../img/plant.png"
import Image6 from "../img/renewable.png"
import { useState } from 'react';
import Footer from './footer';
import { motion } from "framer-motion"

export default function Home() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<h1>Join the Movement. Change the Climate</h1>', '<h1>Together, We Can Make a World of Difference.</h1>', '<h1>Inspiring Change for a Sustainable Future.</h1>', '<h1>Inspiring Change for a Sustainable Future.</h1>'],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  const [electricBill, setElectricBill] = useState('');
  const [naturalGasUsage, setNaturalGasUsage] = useState('');
  const [oilUsage, setOilUsage] = useState('');
  const [lpgUsage, setLpgUsage] = useState('');
  const [wasteProduced, setWasteProduced] = useState('');
  const [result, setResult] = useState('');
  const [text, settext] = useState("")

  const calculateCarbonFootprint = () => {
    const rupeesToKWh = 10;
    const naturalGasEmissionFactor = 0.184;
    const oilEmissionFactor = 2.43;
    const lpgEmissionFactor = 1.54;
    const wasteEmissionFactor = 0.5;
    const energyUsage = electricBill / rupeesToKWh;
    const energyEmissions = energyUsage * 0.2;
    const naturalGasEmissions = naturalGasUsage * naturalGasEmissionFactor;
    const oilEmissions = oilUsage * oilEmissionFactor;
    const lpgEmissions = lpgUsage * lpgEmissionFactor;
    const wasteEmissions = wasteProduced * wasteEmissionFactor;
    const totalEmissions = energyEmissions + naturalGasEmissions + oilEmissions + lpgEmissions + wasteEmissions;
    settext("This data may vary")
    setResult(`Total carbon footprint: ${totalEmissions.toFixed(2)} kg CO2 equivalent`);
  };
  return (
    <>
      <div className="main" style={{ backgroundImage: `url(${background})`, borderBottom: '2px solid violet' }}>
        <div className="writing"><br /><br /><br />
          <h1 className='heading'>Welcome to Planet Protectors: Uniting for Climate Action</h1><br /><br />
          <div className="another">
            <span ref={el} style={{ color: 'white', fontFamily: 'Times New Roman', WebkitTextStroke: '2px orange', color: "transparent" }} />
          </div><br />
          <div className="buttons" style={{ display: 'flex' }}>
            <form action="/sdg"><motion.button whileHover={{ scale: 1.1 }} whileTap={{scale: 0.9}} className='second_button' style={{width: '170px', margin: '0px 10px'}}>SDG 13</motion.button></form>
            <form action='#carbon'><motion.button whileHover={{ scale: 1.1 }} whileTap={{scale: 0.9}} className='second_button' style={{ margin: '0px 10px', width: '170px'}}>carbon footprint</motion.button></form>
          </div>
        </div>
        <div className="img">
          <img src={Image2} alt="" className='second_logo' />
        </div>
      </div><br /><br />
      <div className="second">
        <h1 style={{ textAlign: 'center', color: 'transparent', WebkitTextStroke: '2px orange' }}>Goals</h1><br /><br /><br />
        <div className="goal_box" id='goal'><br />
          <motion.div whileHover={{ scale: 1.1 }} className="box">
            <img src={Image3} alt="" style={{ height: '300px' }} />
            <div className="writing2">
              <h3 className='heading2'>Promoting Renewable Energy</h3><br />
              <p className='detail2'> Describe your support for renewable energy sources such as solar, wind, and hydroelectric power.</p>
            </div>
          </motion.div><br /><br /><br /><br /><br />
          <motion.div whileHover={{ scale: 1.1 }} className="box">
            <img src={Image4} alt="" style={{ height: '300px' }} />
            <div className="writing2">
              <h3 className='heading2'>Plant More Trees</h3><br />
              <p className='detail2'>Start by explaining the importance of tree planting in combating climate change. Trees absorb carbon dioxide, provide oxygen, improve air quality, conserve water, and support biodiversity.</p>
            </div>
          </motion.div><br /><br /><br /><br /><br />
          <motion.div whileHover={{ scale: 1.1 }} className="box">
            <img src={Image6} alt="" style={{ height: '300px' }} />
            <div className="writing2">
              <h3 className='heading2'>Sustainable Practices</h3><br />
              <p className='detail2'> Highlight sustainable practices implemented within your organization, such as eco-friendly packaging, recycling programs, and reducing water consumption.
              </p>
            </div>
          </motion.div>
        </div><br /><br /><br /><br /><br /><br />
        <div className="carbon" id='carbon'>
          <h1 style={{ textAlign: 'center', color: 'transparent', WebkitTextStroke: '2px violet' }}>Calculate your house monthly carbon footprint</h1>
          <div className="calculator">

            <div className="calc"><br />
              <form className='form'>
                <label htmlFor="electricBill">Electricity Bill (in Rupees):</label><br />
                <input type="number" id="electricBill" value={electricBill} onChange={(e) => setElectricBill(e.target.value)} required /><br />
                <label htmlFor="naturalGasUsage">Natural Gas Usage (in kWh):</label><br />
                <input type="number" id="naturalGasUsage" value={naturalGasUsage} onChange={(e) => setNaturalGasUsage(e.target.value)} required /><br />
                <label htmlFor="oilUsage">Oil Usage (in litres):</label><br />
                <input type="number" id="oilUsage" value={oilUsage} onChange={(e) => setOilUsage(e.target.value)} required /><br />
                <label htmlFor="lpgUsage">LPG Usage (in kg):</label><br />
                <input type="number" id="lpgUsage" value={lpgUsage} onChange={(e) => setLpgUsage(e.target.value)} required /><br />
                <label htmlFor="wasteProduced">Waste Produced (in kg):</label><br />
                <input type="number" id="wasteProduced" value={wasteProduced} onChange={(e) => setWasteProduced(e.target.value)} required /><br />
                <button type="button" onClick={calculateCarbonFootprint} className='button'>Calculate</button>
              </form>
              {result && <p style={{ fontSize: '15px', textAlign: 'center' }}>{result}</p>}
            </div><br /><br />
            <div className="calc2">
              <table>
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Emission (kg CO2)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Electricity</td>
                    <td>{electricBill * 0.2}</td>
                  </tr>
                  <tr>
                    <td>Natural Gas</td>
                    <td>{naturalGasUsage * 0.184}</td>
                  </tr>
                  <tr>
                    <td>Oil</td>
                    <td>{oilUsage * 2.43}</td>
                  </tr>
                  <tr>
                    <td>LPG</td>
                    <td>{lpgUsage * 1.54}</td>
                  </tr>
                  <tr>
                    <td>Waste</td>
                    <td>{wasteProduced * 0.5}</td>
                  </tr>
                </tbody>
              </table><br /><br />
              <h1 style={{ textAlign: 'center', fontFamily: 'Times New Roman', fontSize: "20px" }}>Your carbon footprint in table format</h1>
            </div>
          </div>
        </div>
      </div><br /><br />
      <Footer />
    </>
  )
}
