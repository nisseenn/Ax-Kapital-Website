const React = require('react');


const css = require('./css/Footer.css')

var Footer = React.createClass({
  render: function() {
    return <div className={css.Footer}>
      <p>Copyright © 2017 Alexander Nissen - 98057953</p>
    </div>
  }
});


module.exports = Footer;
