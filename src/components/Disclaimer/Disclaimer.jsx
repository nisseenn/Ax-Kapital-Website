const React = require('react');


const css = require('./css/Disclaimer.css')

var Disclaimer = React.createClass({
  render: function() {
    return <div className={css.Disclaimer}>
      <h1>Disclaimer</h1>
      <p>Dialogen og eventuelle forhandlinger skjer direkte mellom den enkelte investor og selskapet og alle investorer må akseptere vår disclaimer før deltagelse på presentasjoner. Mer informasjon informasjon sendes ut til de som registrer seg på denne siden.</p>
    </div>
  }
});


module.exports = Disclaimer;
