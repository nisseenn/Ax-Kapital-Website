const React = require('react');
import { connect } from 'react-redux'

const css = require('./css/Investments.css')

var Investments = React.createClass({
  render: function() {
    return <div className={css.Investments}>
      <h1>Investments</h1>
    </div>
  }
});


module.exports = Investments;
