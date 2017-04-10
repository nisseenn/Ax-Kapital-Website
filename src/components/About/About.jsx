const React = require('react');


const css = require('./css/About.css')

var About = React.createClass({
  render: function() {
    return <div className={css.About}>
      <h1>Om engleinvestor</h1>
      <p>Engleinvestor er et nettverk av investorer og kapital søkende. I samarbeid med Aksjeforum, Grunderklubben og Seed Forum sørger vi for å synliggjøre mulighetene for investeringer i selskaper med stort potensial.</p>
    </div>
  }
});


module.exports = About;
