const React = require('react');

import { Parallax } from 'react-parallax'
import bgImage from './img/partners1.jpg'
import PartnerOne from './img/aksjeforum.png'
//import PartnerTwo from './img/grunder.jpg'
const css = require('./css/Partners.css')

var Partners = React.createClass({
  render: function() {
    return <Parallax bgImage={bgImage} strength={400}>
      <div className={css.Partners}>
        <h1>Våre partnere</h1>
          <div className={css.logos}>
            <img className={css.pictures} src={PartnerOne} />
          </div>
      </div>
    </Parallax>
  }
});


module.exports = Partners;
