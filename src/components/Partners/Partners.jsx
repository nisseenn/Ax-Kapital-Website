const React = require('react');
import { connect } from 'react-redux'

const css = require('./css/Partners.css')

var Partners = React.createClass({
  render: function() {
    return <div className={css.Partners}>
      Partners
    </div>
  }
});


module.exports = Partners;

