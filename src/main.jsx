import React from 'react'
import { render } from 'react-dom'
import css from './app.css'

import Header from './components/Header/Header.jsx'
render(
  <div>
    <Header />
  </div>,
  document.getElementById('react-view')
)
