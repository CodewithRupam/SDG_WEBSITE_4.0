import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./components/home"
import Image from "./img/logo.png"
import Sdg from './components/sdg'
import { useState } from 'react'
import Footer from './components/footer'
import Join from './components/join_us'
import QuestionList from './components/quiz'
import { Link } from 'react-router-dom'
import Challenge from './components/challenge'
import AboutUs from './components/about'
import Renewable from './components/renewable'
import Carbon_reduce from './components/carbon_footprint'
export default function App(props) {
  return (
    <div>
      <Router>
        <nav className="navbar navbar-dark bg-dark fixed-top">
          <div className="container-fluid">
            <img src={Image} alt="" style={{ height: '60px', width: '60px' }} />

            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Planet Protectors: Uniting for climate action</h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Check
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark">
                      <li><Link className="dropdown-item" to="/sdg">SDG 13</Link></li>
                      <li><Link className="dropdown-item" to="/quiz">Quiz</Link></li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li><Link className="dropdown-item" to="/challenge">Challenge</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                  </li>
                </ul><br /><br />
                <Link to="/join">
                  <button className="btn2" type="submit">Join us</button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sdg" element={<Sdg />} />
          <Route path="/join" element={<Join />} />
          <Route path="/quiz" element={<QuestionList />} />
          <Route path='/challenge' element={<Challenge />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path="/renewable" element={<Renewable />} />
          <Route path='/footprint' element={<Carbon_reduce />} />
        </Routes>
      </Router>
    </div>
  )
}

