const React = require('react');
import { connect } from 'react-redux'

const css = require('./css/Header.css')

var Header = React.createClass({
  render: function() {
    return <div className={css.Header}>
      Header
    </div>
  }
});


module.exports = Header;

