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
import Tjenester from './components/Tjenester/Tjenester.jsx'
import OnlineQA from './components/OnlineQA/OnlineQA.jsx'
import Hurtigevent from './components/Hurtigevent/Hurtigevent.jsx'
import Irpakke from './components/Irpakke/Irpakke.jsx'
import css from './app.css'
render(
  <div>
    <Header />
    <About />
    <Investments />
    <Tjenester />
    <OnlineQA />
    <Hurtigevent />
    <Irpakke />
    <Partners />
    <Contact />
    <Footer />
  </div>,
  document.getElementById('react-view')
)
