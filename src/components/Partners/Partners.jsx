const React = require('react');

import { Parallax } from 'react-parallax'
import bgImage from './img/hand3.jpg'
import PartnerOne from './img/aksjeforum.png'
import PartnerTwo from './img/grunderG.png'
const css = require('./css/Partners.css')

var Partners = React.createClass({
  toAksjeforum: function() {
      window.open('https://www.facebook.com/aksjeforum/?fref=ts');
    },
  toGrunder: function() {
      window.open('https://www.facebook.com/gkhoved/');
    },

  render: function() {
    return <Parallax bgImage={bgImage} strength={400}>
      <div className={css.Partners}>
        <h1>Våre partnere</h1>
          <div className={css.logos}>
            <img onClick={this.toAksjeforum} className={css.pictures} src={PartnerOne} />
            <img onClick={this.toGrunder} className={css.pictureTwo} src={PartnerTwo} />
          </div>
      </div>
    </Parallax>
  }
});


module.exports = Partners;
