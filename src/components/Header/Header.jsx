const React = require('react');
import { connect } from 'react-redux'

const css = require('./css/Header.css')

var Header = React.createClass({
  onscroll:function(){

  },
  render: function() {
    var top = window.addEventListener('scroll', this.handleScroll).pageYOffset;
    var backgroundStyle = {
      backgroundPositionY: top
    };
    console.log(top)
    return <div className={css.Header} style={backgroundStyle}>
      <h1>Engleinvestor</h1>
      <p> Engleinvestor er en....</p>
    </div>

  }
});


module.exports = Header;
