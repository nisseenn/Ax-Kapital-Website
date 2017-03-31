const React = require('react');
import { connect } from 'react-redux'

const css = require('./css/Partners.css')

var Partners = React.createClass({
  render: function() {
    return <div className={css.Partners}>
      <h1>Partners</h1>
    </div>
  }
});


module.exports = Partners;
