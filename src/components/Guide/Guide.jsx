const React = require('react');


const css = require('./css/Guide.css')

import HappyCustomer from './img/pencil.png'
import Form from './img/form.png'
import Letter from './img/letter.png'

var Guide = React.createClass({
  render: function() {
    return <div className={css.Guide}>
      <h1>Slik er prosessen</h1>
      <div className={css.smallLine}></div><br />
        <div className={css.step}>
          <img className={css.icon} src={HappyCustomer} />
          <h2>Steg 1</h2>
          <p>Selskapene søker om å få holde presentasjoner</p>
        </div>
        <div className={css.step}>
          <img className={css.icon} src={Form} />
          <h2>Steg 2</h2>
          <p>Selskapene må deretter gjennom et onlinekurs</p>
        </div>
        <div className={css.step}>
          <img className={css.icon} src={Letter} />
          <h2>Steg 3</h2>
          <p>Invitasjoner sendes til investorene på mail</p>
        </div>
    </div>
  }
});


module.exports = Guide;
