const React = require('react');
import { connect } from 'react-redux'

const css = require('./css/Investments.css')

var Investments = React.createClass({
  render: function() {
    return <div className={css.Investments}>
      Investments
    </div>
  }
});


module.exports = Investments;

