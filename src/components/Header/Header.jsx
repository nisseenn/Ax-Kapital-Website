const React = require('react');

import { Parallax } from 'react-parallax'
import bgImage from './img/bg.jpg'
const css = require('./css/Header.css')
var Scroll  = require('react-scroll');
var Info = require('../About/About.jsx');
var Contact = require('../Submit/Submit.jsx');

var Link       = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

var Header = React.createClass({
  componentDidMount: function() {
    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });
    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });
    scrollSpy.update();
  },
  handleSetActive: function(to) {
   console.log(to);
 },
  componentWillUnmount: function() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  },
  render: function() {
    return <Parallax bgImage={bgImage} strength={400}>
      <div className={css.Header}>
        <h1>Engleinvestor</h1>
        <h2>Der de gode selskapene møter nødvendig kapital </h2>
        <Link className={css.readOne} activeClass="active" to="Info" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
          <button className={css.readMore}>Les mer</button>
        </Link>
        <Link className={css.readTwo} activeClass="active" to="Contact" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
          <button className={css.contactUs}>Kontakt oss</button>
        </Link>
      </div>
      <Element name="Info" className="element" />
      <Element name="Contact" className="element" />
    </Parallax>
  }
});


module.exports = Header;
