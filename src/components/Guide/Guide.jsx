const React = require('react');


const css = require('./css/Guide.css')

import HappyCustomer from './img/pencil.png'
import Form from './img/diagram.jpg'
import Letter from './img/letter.png'
import Diagram from './img/form.png'

var Guide = React.createClass({
  render: function() {
    return <div className={css.Guide} id="guide">
      <h1>Slik er prosessen</h1>
      <div className={css.smallLine}></div><br />
        <div className={css.step}>
          <img className={css.icon} src={HappyCustomer} />
          <h2>Steg 1</h2>
          <p>Selskapene sender søknad om å få bruke vår online plattform.</p>
        </div>
        <div className={css.step}>
          <img className={css.icon} src={Form} />
          <h2>Steg 2</h2>
          <p>Vi gjør en seleksjon basert på ”best practice” og forhåndsbestemte kriterier.</p>
        </div>
        <div className={css.step}>
          <img className={css.icon} src={Diagram} />
          <h2>Steg 3</h2>
          <p>Selskapene må gjennom relevante obligatoriske kurs.</p>
        </div>
        <div className={css.step}>
          <img className={css.icon} src={Letter} />
          <h2>Steg 4</h2>
          <p>Selskapspresentasjoner og Q&A på lukket online plattform</p>
        </div>
    </div>
  }
});


module.exports = Guide;
