const React = require('react');
import { connect } from 'react-redux'

const css = require('./css/About.css')

var About = React.createClass({
  render: function() {
    return <div className={css.About}>
      <h1>Om engleinvestor</h1>
      <p>Engleinvestor er en ...</p>
    </div>
  }
});


module.exports = About;
