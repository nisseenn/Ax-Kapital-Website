const React = require('react');
import { connect } from 'react-redux'

const css = require('./css/Guide.css')

var Guide = React.createClass({
  render: function() {
    return <div className={css.Guide}>
      <h1>Guide</h1>
      <p1>tjghj</p1>
    </div>
  }
});


module.exports = Guide;
