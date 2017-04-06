const React = require('react');


const css = require('./css/Footer.css')

var Footer = React.createClass({
  render: function() {
    return <div className={css.Footer}>
      <p>Developed by Alexander Nissen - alex_nissen@hotmail.com</p>
    </div>
  }
});


module.exports = Footer;
