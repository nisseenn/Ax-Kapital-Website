const React = require('react');
import { connect } from 'react-redux'

const css = require('./css/Submit.css')

var Submit = React.createClass({
  render: function() {
    return <div className={css.Submit}>
      <h1>Meld interesse</h1>
      <p>Ved å søke her medlder du interesse</p>
    </div>
  }
});


module.exports = Submit;
