import React from 'react'
import { render } from 'react-dom'

import Header from './components/Header/Header.jsx'
import About from './components/About/About.jsx'
import Guide from './components/Guide/Guide.jsx'
import Submit from './components/Submit/Submit.jsx'
import Investments from './components/Investments/Investments.jsx'
import Partners from './components/Partners/Partners.jsx'
import Team from './components/Team/Team.jsx'
import Footer from './components/Footer/Footer.jsx'

import css from './app.css'

render(
  <div>
    <Header />
    <About />
    <Guide />
    <Submit />
    <Partners />
    <Team />
    <Footer />
  </div>,
  document.getElementById('react-view')
)
