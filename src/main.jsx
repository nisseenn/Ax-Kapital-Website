import React from 'react'
import { render } from 'react-dom'

import Navbar from './components/Navbar/Navbar.jsx'
import Header from './components/Header/Header.jsx'
import About from './components/About/About.jsx'
import Guide from './components/Guide/Guide.jsx'
import Submit from './components/Submit/Submit.jsx'
import Investments from './components/Investments/Investments.jsx'
import Partners from './components/Partners/Partners.jsx'
import Team from './components/Team/Team.jsx'
import Contact from './components/Contact/Contact.jsx'
import Disclaimer from './components/Disclaimer/Disclaimer.jsx'
import Footer from './components/Footer/Footer.jsx'
import css from './app.css'
render(
  <div>
    <Navbar />
    <Header />
    <About />
    <Guide />
    <Investments />
    <Submit />
    <Partners />
    <Team />
    <Contact />
    <Disclaimer />
    <Footer />
  </div>,
  document.getElementById('react-view')
)
