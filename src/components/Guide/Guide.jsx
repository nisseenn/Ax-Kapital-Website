const React = require('react');
import { connect } from 'react-redux'

const css = require('./css/Guide.css')

var Guide = React.createClass({
  render: function() {
    return <div className={css.Guide}>
      Guide
    </div>
  }
});


module.exports = Guide;

