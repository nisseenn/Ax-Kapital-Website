const React = require('react');


const css = require('./css/About.css')

var About = React.createClass({
  render: function() {
    return <div className={css.About} id="about">
      <h1>Om engleinvestor</h1>
      <p>Engleinvestor er en online møteplass for investorer og kapitalsøkende. I samarbeid med Aksjeforum, Grunderklubben og Seed Forum sørger vi for å synligjøre mulighetene for investeringer i selskaper med stort potensial.</p>
    </div>
  }
});


module.exports = About;
