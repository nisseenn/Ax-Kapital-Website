const React = require('react');
import { connect } from 'react-redux'

const css = require('./css/Header.css')

var Header = React.createClass({
  render: function() {
    return <div className={css.Header}>
      <h1>Engleinvestor</h1>
    </div>
  }
});


module.exports = Header;
