const React = require('react');
const css = require('./css/Guide.css')

import tjuefire from './img/bro.jpg'
import tjueni from './img/bro1.jpg'
import otti from './img/bro3.jpg'
import forti from './img/bro2.jpg'

var Guide = React.createClass({
  render: function() {
    return <div className={css.Guide} id="guide">
      <h1>pris ir-pakke</h1>
      <div className={css.smallLine}></div><br />
        <div className={css.step}>
          <img className={css.icon} src={tjuefire} />
          <h2>Abonnement 2 mnd</h2>

        </div>
        <div className={css.step}>
          <img className={css.icon} src={tjueni} />
          <h2>Abonnement 3 mnd</h2>

        </div>
        <div className={css.step}>
          <img className={css.icon} src={forti} />
          <h2>Abonnement 6 mnd</h2>

        </div>
        <div className={css.step}>
          <img className={css.icon} src={otti} />
          <h2>Abonnement 12 mnd,</h2>

        </div>
    </div>

  }
});


module.exports = Guide;
