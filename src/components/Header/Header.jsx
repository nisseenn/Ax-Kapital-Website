const React = require('react');

import { Parallax } from 'react-parallax'
import bgImage from './img/bg.jpg'
import jump from 'jump.js'
import Info from '../About/About.jsx'
const css = require('./css/Header.css')
const node = document.querySelector('.Info')

var Header = React.createClass({
  scroll: function() {
    jump(node)
  },
  render: function() {
    return <Parallax bgImage={bgImage} strength={400}>
      <div className={css.Header}>
        <h1>Engleinvestor</h1>
        <h2>Der de gode selskapene møter nødvendig kapital </h2>
          <button className={css.readMore} onClick={scroll}>Les mer</button>
          <button className={css.contactUs}>Kontakt oss</button>
        <div className={css.Info} />
      </div>

    </Parallax>
  }
});


module.exports = Header;
