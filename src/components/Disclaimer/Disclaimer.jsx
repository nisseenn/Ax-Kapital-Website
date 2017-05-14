const React = require('react');


const css = require('./css/Disclaimer.css')

var Disclaimer = React.createClass({
  render: function() {
    return <div className={css.Disclaimer}>
      <h1>Disclaimer</h1>
      <p>Dialogen og eventuelle forhandlinger skjer direkte mellom den enkelte investor og selskapet. Alle investorer må akseptere vår disclaimer før deltagelse på presentasjoner. Mer informasjon sendes ut etter registrering.</p>
    </div>
  }
});


module.exports = Disclaimer;
