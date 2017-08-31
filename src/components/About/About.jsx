const React = require('react');


const css = require('./css/About.css')

var About = React.createClass({
  render: function() {
    return <div className={css.About} id="about">
      <h1>Om Axkapital</h1>
      <p>AX Kapital tilbyr tjenester innenfor Investor Relation og markedsføringsfunksjoner med nytenkende medieløsninger.</p>
    </div>
  }
});


module.exports = About;
