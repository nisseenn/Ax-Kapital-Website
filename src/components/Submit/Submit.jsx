const React = require('react');
import { connect } from 'react-redux'

const css = require('./css/Submit.css')

var Submit = React.createClass({
  render: function() {
    return <div className={css.Submit}>
      Submit
    </div>
  }
});


module.exports = Submit;

