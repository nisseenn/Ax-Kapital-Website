const React = require('react');
import { connect } from 'react-redux'

const css = require('./css/Guide.css')

import HappyCustomer from './img/happy_customer.png'

var Guide = React.createClass({
  render: function() {
    return <div className={css.Guide}>
      <h1>Slik er prosessen</h1>
      <div className={css.smallLine} /><br />
        <div className={css.step}>
          <div className={css.icon} style={{ backgroundImage: "url(" + HappyCustomer + ")" }} />
          <h2>Lorem</h2>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
        <div className={css.step}>
          <div className={css.icon} style={{ backgroundImage: "url(" + HappyCustomer + ")" }} />
          <h2>Ipsum</h2>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
        <div className={css.step}>
          <div className={css.icon} style={{ backgroundImage: "url(" + HappyCustomer + ")" }} />
          <h2>Sit</h2>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
    </div>
  }
});


module.exports = Guide;
