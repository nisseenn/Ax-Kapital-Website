const React = require('react');
import { connect } from 'react-redux'

const css = require('./css/Submit.css')

var Submit = React.createClass({
  render: function() {
    return <div className={css.Submit}>
      <h1>Submit</h1>
    </div>
  }
});


module.exports = Submit;
