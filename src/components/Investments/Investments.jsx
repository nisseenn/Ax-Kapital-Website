const React = require('react');

import { Parallax } from 'react-parallax'
import bgImage from './img/coin2.jpg'
import CountUp from 'react-countup';

const css = require('./css/Investments.css')


var Investments = React.createClass({
  render: function() {
    return <Parallax bgImage={bgImage} strength={300}>
    <div className={css.Investments}>
      <h1>Kapital investert så langt</h1>
        <span className="countUp">
          <CountUp start={0} end={0} duration={5} useEasing={true} />
        </span>
        <p>kr</p>
    </div>
    </Parallax>
  }
});


module.exports = Investments;
