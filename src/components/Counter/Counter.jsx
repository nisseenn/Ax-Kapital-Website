const React = require('react');
import { connect } from 'react-redux'
import CounterElement from 'react-counter'

const css = require('./css/Counter.css')

var Counter = React.createClass({
  render: function() {
    return <CounterElement begin={0} end={1000} time={2000} easing="outCube" />
  }
});

module.exports = Counter;
