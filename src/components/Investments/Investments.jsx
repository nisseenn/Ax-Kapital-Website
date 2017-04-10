const React = require('react');

import { connect } from 'react-redux'
import { Parallax } from 'react-parallax'
import bgImage from './img/coin.jpg'
import CountUp from 'react-countup';

const css = require('./css/Investments.css')


var Investments = React.createClass({
  render: function() {
    return <Parallax bgImage={bgImage} strength={300}>
    <div className={css.Investments}>
      <h1>Invested capital so far</h1>
        <span className="countUp">
          <CountUp start={0} end={1000} duration={2.75} useEasing={true} />
        </span>
        <p>kr</p>
    </div>
    </Parallax>
  }
});


module.exports = Investments;
