const React = require('react');

import { connect } from 'react-redux'
import { Parallax } from 'react-parallax'
import bgImage from './img/coin.jpg'

const css = require('./css/Investments.css')
import CountUp from 'react-countup';


var Investments = React.createClass({
  render: function() {
    return <Parallax bgImage={bgImage} strength={400}>
    <div className={css.Investments}>
      <h1>Invested capital so far</h1>
        <div className={css.container}>
          <CountUp className="CountUp" start={0} end={1000} duration={2.75} useEasing={true} />
        </div>
    </div>
    </Parallax>
  }
});


module.exports = Investments;
